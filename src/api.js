import axios from 'axios';

// 🔑  Replace with your real OMDb API key
const API_KEY = '9ce0e50e';

export const fetchMovies = async (query) => {
  const res = await axios.get('https://www.omdbapi.com/', {
    params: { apikey: API_KEY, s: query },
  });
  return res.data.Search;
};

export const fetchMovieDetails = async (id) => {
  const res = await axios.get('https://www.omdbapi.com/', {
    params: { apikey: API_KEY, i: id, plot: 'full' },
  });
  return res.data;
};
