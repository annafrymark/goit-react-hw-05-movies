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

  const [error, setError] = useState(null);

  const searchMovieCast = async () => {
    try {
      let movieCast = await fetchCastWithMovieId(movieId);
      setCast(movieCast);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    searchMovieCast();
  });

  return (
    <div>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                  : 'http://tinleychamber.org/wp-content/uploads/2019/01/no-image-available.png'
              }
              alt="actor photo"
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
