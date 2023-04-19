import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'utils/GetInfo';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const getTrendingMovieList = async () => {
    try {
      let movies = await fetchTrendingMovies();
      console.log(movies);
      setTrendingMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrendingMovieList();
  }, []);

  // const showTrendingMovieList = () => {};
  return <div>"HOME "{trendingMovies.length > 0 && trendingMovies[0].title}</div>;
};

export default Home;
