import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { fetchMoviesWithId } from 'utils/GetInfo';
import { BackLink } from 'components/BackLink';
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

  const searchMovieDetails = async () => {
    try {
      let movieDetails = await fetchMoviesWithId(movieId);
      setMovieDetails(movieDetails);
      setImageUrl(
        `https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchMovieDetails();
  });

  const location = useLocation();
  //console.log(location.state);
   const backLinkHref = location.state?.from ?? '/';

  return (
    <div className={css.container}>
      <BackLink to={backLinkHref}>
        &#x2190; Go back
      </BackLink>
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
          <p className={css.genres}>
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
