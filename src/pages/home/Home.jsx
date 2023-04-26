import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'utils/GetInfo';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  const getTrendingMovieList = async () => {
    try {
      let movies = await fetchTrendingMovies();
      // console.log(movies);
      setTrendingMovies(movies);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getTrendingMovieList();
  }, []);
  // console.log(trendingMovies);

  // const showTrendingMovieList = trendingMovies => {
  //   trendingMovies.results.forEach(trendingMovie => {
  //     let title = trendingMovie.title;
  //     let id = trendingMovie.id;
  //   });
  //  };

  return (
    // <div>"HOME "{trendingMovies.length > 0 && trendingMovies[0].title}</div>;
    <>
      <h1>Trending Today</h1>
      {error && <div>{ error.message}</div>}
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.name || movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
