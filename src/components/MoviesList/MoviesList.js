import { useState, useEffect } from "react";
import MovieListItem from "../MovieListItem/MovieListItem.js";
import PropTypes from "prop-types";
import { fetchMoviesGenres } from "../../services/moviesApi";

export default function MoviesList({ movies }) {
  const [genres, setGenres] = useState(null);
  useEffect(() => {
    function MoviesGenres() {
      try {
        const genres = fetchMoviesGenres();
        setGenres(genres);
      } catch (error) {
        console.log(error);
      }
    }
    MoviesGenres();
  }, []);
  return (
    <ul>
      {genres &&
        movies.map(({ id, title, rating, genre_f }) => (
          <MovieListItem
            key={id}
            id={id}
            title={title}
            rating={rating}
            genres={genres
              .filter((genre) => genre_f.includes(genre.id))
              .slice(0, 3)
              .map((genre) => genre.name)
              .join(", ")}
          />
        ))}
    </ul>
  );
}
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
