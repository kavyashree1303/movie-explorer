const MovieCard = ({ movie, onClick }) => {
  return (
    <div
      tabIndex="0"
      onClick={() => onClick(movie.imdbID)}
      style={{
        width: '180px',
        margin: '10px',
        cursor: 'pointer',
        textAlign: 'center',
      }}
    >
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
        alt={movie.Title}
        height="240"
        style={{ borderRadius: '4px' }}
      />
      <h3>{movie.Title}</h3>
    </div>
  );
};

export default MovieCard;
