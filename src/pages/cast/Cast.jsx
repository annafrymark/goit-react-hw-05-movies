import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastWithMovieId } from 'utils/GetInfo';
import css from './Cast.module.css';

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

  const searchMovieCast = async () => {
    try {
      let movieCast = await fetchCastWithMovieId(movieId);
      setCast(movieCast);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchMovieCast();
  });

  return (
    <div>
      <ul className={css.actorsList}>
        {cast.map(actor => (
          <li key={actor.id} className={css.actor}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                  : 'http://tinleychamber.org/wp-content/uploads/2019/01/no-image-available.png'
              }
              alt="actor"
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
