import axios from 'axios';
let apiKey = 'ede5208378a65a6fc273c11c764d424b';

// Example API Request
// https://api.themoviedb.org/3/movie/550?api_key=ede5208378a65a6fc273c11c764d424b

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const fetchMoviesWithQuery = async searchQuery => {
  const response = await axios.get(`?q=${searchQuery}&api_key=${apiKey}`);
  return response.data.results;
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${apiKey}`);
  //console.log(response);
  return response.data.results;
};
