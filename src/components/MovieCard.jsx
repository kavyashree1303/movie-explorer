import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 180px;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  transition: transform .2s;
  &:hover   { transform: scale(1.04); }
  &:focus   { outline: 3px solid #1976d2; outline-offset: 2px; }
`;

const Img = styled.img`
  height: 240px;
  border-radius: 4px;
`;

const MovieCard = ({ movie, onClick }) => (
  <Card
    role="button"
    tabIndex="0"
    aria-label={`Show details for ${movie.Title}`}
    onClick={() => onClick(movie.imdbID)}
    onKeyDown={(e) =>
      (e.key === 'Enter' || e.key === ' ') && onClick(movie.imdbID)}
  >
    <Img
      src={
        movie.Poster !== 'N/A'
          ? movie.Poster
          : 'https://via.placeholder.com/150'
      }
      alt={movie.Title}
    />
    <h3 style={{ fontSize: 16 }}>{movie.Title}</h3>
  </Card>
);

export default MovieCard;
