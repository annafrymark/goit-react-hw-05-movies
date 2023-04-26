import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchMoviesWithId } from 'utils/GetInfo';
//import { useLocation } from 'react-router-dom';
import css from './MovieDetails.module.css'

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
      setImageUrl(`${movieDetails.poster_path}`);
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
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

//'/movies/:movieId' - komponent MovieDetails, strona ze szczegółowymi informacjami o filmie.
