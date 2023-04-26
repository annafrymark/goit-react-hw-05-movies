import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './header/Header';
const Home = lazy(() => import('../pages/home/Home'));
const Movies = lazy(() => import('../pages/movies/Movies'));
const MovieDetails = lazy(() => import('../pages/movieDetails/MovieDetails'));


// import { Cast } from '../pages/cast/Cast';
// import { Reviews } from '../pages/reviews/Reviews';
// import { NotFound } from '../pages/notFound/NotFound';

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />

        <Routes>
          <Route path="/" element={<Header />} />
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
          {/*  <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </div>
  );
};

//  {
//    filteredPlanets.map(planet => <div key={planet}>{planet}</div>);
//  }
