// src/components/MovieDetails.jsx
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

/* ---------------- styled‑components ---------------- */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Panel = styled.div`
  background: var(--panel-bg, #ffffff);
  color: var(--panel-fg, #111111);
  width: 90%;
  max-width: 500px;
  max-height: 90%;
  padding: 24px;
  border-radius: 12px;
  overflow-y: auto;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);
`;

const CloseBtn = styled.button`
  float: right;
  font-size: 1.3rem;
  background: transparent;
  border: none;
  cursor: pointer;
`;

/* ---------------- component ---------------- */

const MovieDetails = ({ movie, onClose }) => {
  // Do not render if no movie selected
  if (!movie) return null;

  const panelRef = useRef(null);
  const closeBtnRef = useRef(null);

  /* ------------ Escape key & focus trap ------------ */
  useEffect(() => {
    // auto‑focus ❌ button for keyboard users
    closeBtnRef.current?.focus();

    const handleKey = (e) => {
      // ESC key closes dialog
      if (e.key === 'Escape') onClose();

      // Simple focus trap: keep Tab inside the panel
      if (e.key === 'Tab') {
        const focusables = panelRef.current.querySelectorAll(
          'a,button,[tabindex]:not([tabindex="-1"])'
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (focusables.length === 0) return;

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  /* ------------ render ------------ */
  return (
    <Overlay onClick={onClose} data-testid="overlay">
      <Panel
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="movie-title"
        onClick={(e) => e.stopPropagation()} /* prevent overlay close */
      >
        <CloseBtn
          aria-label="Close details"
          onClick={onClose}
          ref={closeBtnRef}
        >
          ❌
        </CloseBtn>

        <h2 id="movie-title">
          {movie.Title} ({movie.Year})
        </h2>

        <p>
          <strong>Rating:</strong> ⭐ {movie.imdbRating}
        </p>

        <p>
          <strong>Plot:</strong> {movie.Plot}
        </p>

        {movie.Website && movie.Website !== 'N/A' && (
          <a
            href={movie.Website}
            target="_blank"
            rel="noreferrer"
            style={{ color: '#1976d2' }}
          >
            Official site / trailer
          </a>
        )}
      </Panel>
    </Overlay>
  );
};

export default MovieDetails;
