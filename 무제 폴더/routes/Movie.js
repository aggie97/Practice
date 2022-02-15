import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({ id, coverImg, title, genres, summary }) {
  return (
    <div>
      <hr />
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3>{genres.join(" & ")}</h3>
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Movie;
