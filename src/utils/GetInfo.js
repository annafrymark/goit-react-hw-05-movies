import axios from 'axios';
let apiKey = 'ede5208378a65a6fc273c11c764d424b';

// Example API Request
// https://api.themoviedb.org/3/movie/550?api_key=ede5208378a65a6fc273c11c764d424b

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const fetchMoviesWithQuery = async searchQuery => {
  if (searchQuery !== null) {
    const response = await axios.get(
      `/search/movie?api_key=${apiKey}&query=${searchQuery}`
    );
    return response.data.results;
  } else {
    return [];
  }
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${apiKey}`);
  return response.data.results;
};

export const fetchMoviesWithId = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?&api_key=${apiKey}&language=en-US`
  );
  return response.data;
};

export const fetchCastWithMovieId = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
  );
  return response.data.cast;
};

export const fetchReviewWithMovieId = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`
  );

  return response.data.results;
};
