import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../style/components/card.scss";

function Card({ id, title, picture }) {
  return (
    <Link to={`/logement/${id}`}>
      <div className="card">
        <img src={picture} alt={title} className="card-image" />
        <div className="card-title-overlay">
          <h3 className="card-title">{title}</h3>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Card;
