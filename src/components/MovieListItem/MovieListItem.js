import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export default function MovieListItem({ id, title, rating, genres }) {
  const location = useLocation();
  return (
    <li>
      <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
        <h2>{title}</h2>
        <div>
          <p>{rating}</p>
          <p>{genres}</p>
        </div>
      </Link>
    </li>
  );
}
MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  genre: PropTypes.string,
  rating: PropTypes.number,
};
