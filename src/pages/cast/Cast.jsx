///movies/:movieId/cast - komponent Cast, informacja o zespole aktorskim. Renderuje się na stronie MovieDetails.
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastWithMovieId } from 'utils/GetInfo';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([
    {
      name: '',
      character: '',
      id: '',
      profile_path: null,
    },
  ]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchMovieCast = async () => {
    try {
      let movieCast = await fetchCastWithMovieId(movieId);
      console.log(movieCast);
      setCast(movieCast);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    searchMovieCast();
    setisLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img src={actor.profile_path} alt="actor photo" />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
