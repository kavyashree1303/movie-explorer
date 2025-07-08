import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';
import { fetchMovies, fetchMovieDetails } from './api';
import { getCachedData, setCachedData } from './cache';
import { ThemeContext } from './context/ThemeContext';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

function App() {
  const { dark, setDark } = useContext(ThemeContext);

  const [movies, setMovies]   = useState([]);
  const [selected, setSelected] = useState(null);
  const [status, setStatus]   = useState('');

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    setStatus('loading');

    const cached = getCachedData(query);
    if (cached) {
      setMovies(cached);
      setStatus(cached.length ? '' : 'empty');
      return;
    }

    try {
      const results = await fetchMovies(query);
      if (results?.length) {
        setMovies(results);
        setCachedData(query, results);
        setStatus('');
      } else {
        setMovies([]);
        setStatus('empty');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const handleSelect = async (id) => {
    try {
      const details = await fetchMovieDetails(id);
      setSelected(details);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <button onClick={() => setDark(!dark)} style={{ float: 'right' }}>
        {dark ? 'Light' : 'Dark'} mode
      </button>

      <h1>🎬 Movie Explorer</h1>

      <SearchBar onSearch={handleSearch} />

      {status === 'loading' && <p>Loading…</p>}
      {status === 'empty'   && <p>No movies found.</p>}
      {status === 'error'   && <p style={{ color: 'red' }}>Error fetching data.</p>}

      <Grid>
        {movies.map((m) => (
          <MovieCard
            key={m.imdbID}
            movie={m}
            onClick={handleSelect}
          />
        ))}
      </Grid>

      <MovieDetails
        movie={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}

export default App;
