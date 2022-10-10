import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//<a href=""></a>를 사용해서 link하는 대신에 react에서는 link를 사용
//Link사용 이유는 페이지를 새로고침하지 않기 위해서(a태그를 사용하면 페이지가 새로고침한다)

function Movie({ id, mediumCoverImage, title, summary, genres }) {
  return (
    <div>
      <img src={mediumCoverImage} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
