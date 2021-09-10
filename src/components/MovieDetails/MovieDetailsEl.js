import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "../MovieDetails/movieDetails.module.css";
export default function MovieDetailsEl({ movie, url, location }) {
  return (
    <>
      <div>
        <h2>
          {movie.title && movie.origin_name} {movie.title}
          {movie.release_date && (
            <span>({movie.release_date.slice(0, 4)})</span>
          )}
        </h2>
        <h3>
          Rating: <span>{movie.vote_average}</span>
        </h3>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h2>
          Genres:
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </h2>
      </div>
      <ul>
        <li>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { from: location.state ? location.state.from : "/" },
            }}
            activeClassName={styles.link}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { from: location.state ? location.state.from : "/" },
            }}
            activeClassName={styles.link}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </>
  );
}

MovieDetailsEl.propTypes = {
  movie: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};
