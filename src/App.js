import "./App.css";
import { Route, Switch } from "react-router-dom";

import Loader from "./components/Loader/Loader";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";

// import Cast from "./views/Cast";
// import Reviews from "./views/Reviews";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import AppBar from "./components/AppBar/AppBar";
import { lazy, Suspense } from "react";
const HomePage = lazy(() => import("./views/HomePage"));
export default function App() {
  <>
    <AppBar />
    <Suspense>
      <Switch fallback={<Loader />}>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        {/* <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews" component={Reviews} /> */}
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Suspense>
  </>;
}
