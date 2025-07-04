import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';
import { fetchMovies, fetchMovieDetails } from './api';
import { getCachedData, setCachedData } from './cache';

function App() {
  const [movies, setMovies]   = useState([]);
  const [selected, setSelected] = useState(null);
  const [status, setStatus]   = useState('');        // '', 'loading', 'empty', 'error'

  /* 🔍 Called when user submits the search bar */
  const handleSearch = async (query) => {
    // ignore empty searches
    if (!query.trim()) return;

    setStatus('loading');
    const cached = getCachedData(query);

    if (cached) {
      console.log('🗂 Using cached results:', cached);
      setMovies(cached);
      setStatus(cached.length ? '' : 'empty');
      return;
    }

    try {
      const results = await fetchMovies(query);       // ➡️ call OMDb
      console.log('🌐 API response:', results);

      if (results && results.length) {
        setMovies(results);
        setCachedData(query, results);
        setStatus('');
      } else {
        setMovies([]);
        setStatus('empty');  // nothing came back
      }
    } catch (err) {
      console.error('❌ fetchMovies error:', err);
      setStatus('error');
    }
  };

  /* 🔍 Called when user clicks a movie card */
  const handleSelect = async (id) => {
    try {
      const details = await fetchMovieDetails(id);
      console.log('ℹ️ Movie details:', details);
      setSelected(details);
    } catch (err) {
      console.error('❌ fetchMovieDetails error:', err);
    }
  };

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>🎬 Movie Explorer</h1>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Loading / Empty / Error states */}
      {status === 'loading' && <p>Loading…</p>}
      {status === 'empty'   && <p>No movies found. Try another title.</p>}
      {status === 'error'   && <p style={{ color: 'red' }}>Something went wrong. Check console.</p>}

      {/* Movie grid */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20,
        marginTop: 20
      }}>
        {movies.map(movie => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={handleSelect}
          />
        ))}
      </div>

      {/* Details overlay */}
      <MovieDetails
        movie={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}

export default App;
