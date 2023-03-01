import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, image, summary, genres }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}> {title}</Link>
      </h2>
      <Link to={`/movie/${id}`}>
        <img src={image} alt={title}></img>
      </Link>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
