import axios from 'axios';
let apiKey = 'ede5208378a65a6fc273c11c764d424b';

// Example API Request
// https://api.themoviedb.org/3/movie/550?api_key=ede5208378a65a6fc273c11c764d424b

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const fetchMoviesWithQuery = async searchQuery => {
  console.log(searchQuery);
  if (searchQuery !== null) {
    // const response = await axios.get(`?q=${searchQuery}&api_key=${apiKey}`);
    const response = await axios.get(
      `/search/movie?api_key=${apiKey}&query=${searchQuery}`
    );
    console.log(response);
    return response.data.results;
  } else {
    return [];
  }
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${apiKey}`);
  //console.log(response);
  return response.data.results;
};

export const fetchMoviesWithId = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?&api_key=${apiKey}&language=en-US`
    );
    //console.log(response);
  return response.data;
};

export const fetchCastWithMovieId = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
  );
  console.log(response.data.cast);
  return response.data.cast;
};

export const fetchReviewWithMovieId = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`
  );
  //console.log(response);
  return response.data;
};

// https://api.themoviedb.org/3
// /movie/{ movie_id } /reviews?api_key=<<api_key>>&language=en-US&page=1