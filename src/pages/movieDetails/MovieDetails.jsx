import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchMoviesWithId } from 'utils/GetInfo';
//import { useLocation } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({
    title: '',
    release_date: '',
    vote_average: '',
    overview: '',
    genres: [],
  });
  const [imageUrl, setImageUrl] = useState('');
  const { movieId } = useParams();
  const [error, setError] = useState(null);

  const searchMovieDetails = async () => {
    try {
      let movieDetails = await fetchMoviesWithId(movieId);
      console.log(movieDetails);
      setMovieDetails(movieDetails);
      setImageUrl(
        `https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`
      );
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    searchMovieDetails();
  }, []);

  // const location = useLocation();
  // const prevLocation = location.state?.from ?? '/goit-react-hw-05-movies/';

  return (
    <div className={css.container}>
      {/* <Link className={css.link} to={prevLocation}>
        Go back
      </Link> */}
      <div className={css.movieDetails}>
        <img className={css.poster} src={imageUrl} alt="movie poster" />
        <div>
          <h3>
            {movieDetails.title} ({movieDetails.release_date.slice(0, 4)})
          </h3>
          <p>User score: {movieDetails.vote_average}</p>
          <h4>Overview</h4>
          <p>{movieDetails.overview}</p>
          <h4>Genres</h4>
          <p>
            {movieDetails.genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </p>
        </div>
      </div>
      <div className={css.additionalInfo}>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;

//'/movies/:movieId' - komponent MovieDetails, strona ze szczegółowymi informacjami o filmie.
