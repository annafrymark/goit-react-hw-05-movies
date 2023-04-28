import { useState, useEffect } from 'react';
import { fetchMoviesWithQuery } from 'utils/GetInfo';
import { Link, useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchMovies = async () => {
      try {
        let searchedMovies = await fetchMoviesWithQuery(
          searchParams.get('query')
        );
        setMovies(searchedMovies);
      } catch (error) {
        setError(error);
      }
    };
    searchMovies();
  }, [searchParams]);

  const handleSubmit = event => {
    event.preventDefault();
    const searchInput = event.target[0].value;
    if (searchInput !== '') setSearchParams({ query: searchInput });
    else setSearchParams({});
    event.target[0].value = '';
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          // value={inputValue}
          // onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      {error && <div>{error.message}</div>}
      <ul className={css.movieList}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`${movie.id}`}
              state={{
                from: location,
                // from: `/goit-react-hw-05-movies/movies?${searchParams}`,
              }}
            >
              {movie.name || movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

//'/movies' - komponent Movies, strona wyszukiwania filmów po słowie kluczu.
export default Movies;
