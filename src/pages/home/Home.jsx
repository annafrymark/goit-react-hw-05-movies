import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'utils/GetInfo';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  const getTrendingMovieList = async () => {
    try {
      let movies = await fetchTrendingMovies();
      setTrendingMovies(movies);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getTrendingMovieList();
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending Today</h1>
      {error && <div>{error.message}</div>}
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.name || movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
