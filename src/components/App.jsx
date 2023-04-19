import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
// import { Movies } from '../pages/movies/Movies';
// import { MovieDetails } from '../pages/movieDetails/MovieDetails';
// import { Cast } from '../pages/cast/Cast';
// import { Reviews } from '../pages/reviews/Reviews';
// import { NotFound } from '../pages/notFound/NotFound';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
