import React, { useEffect } from 'react';

const MovieDetails = ({ movie, onClose }) => {
  if (!movie) return null;

  // Close when Escape key is pressed
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}
    >
      <div
        className="panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          padding: '20px',
          borderRadius: '10px',
          width: '90%',
          maxWidth: '500px',
          maxHeight: '90%',
          overflowY: 'auto',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
        }}
      >
        <button onClick={onClose} style={{ float: 'right' }}>❌</button>
        <h2>{movie.Title} ({movie.Year})</h2>
        <p><strong>Rating:</strong> ⭐ {movie.imdbRating}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        {movie.Website && movie.Website !== 'N/A' && (
          <a href={movie.Website} target="_blank" rel="noreferrer">
            Watch Trailer / Visit Website
          </a>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
