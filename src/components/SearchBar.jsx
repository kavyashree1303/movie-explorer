import React, { useState } from 'react';
import styled from 'styled-components';

const Form  = styled.form``;
const Input = styled.input`
  padding: 8px 12px;
  width: 220px;
  margin-right: 8px;
`;
const Btn   = styled.button`
  padding: 8px 16px;
  cursor: pointer;
`;

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies…"
      />
      <Btn type="submit">Search</Btn>
    </Form>
  );
};

export default SearchBar;
