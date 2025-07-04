import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query); // send the search text to App
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: '8px',
          width: '250px',
          marginRight: '10px'
        }}
      />
      <button type="submit" style={{ padding: '8px 16px' }}>Search</button>
    </form>
  );
};

export default SearchBar;
