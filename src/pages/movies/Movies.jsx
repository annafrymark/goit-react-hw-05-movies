import { useState, useEffect } from 'react';
import { fetchMoviesWithQuery } from 'utils/GetInfo';
import { Link, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);

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

  useEffect(() => {
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
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              state={{
                from: `/goit-react-hw-05-movies/movies?${searchParams}`,
              }}
              to={`${movie.id}`}
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
