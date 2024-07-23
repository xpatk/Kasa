import PropTypes from "prop-types";
import "../style/components/card.scss";

function Card({ title, picture }) {
  return (
    <div className="card">
      <img src={picture} alt={title} className="card-image" />
      <div className="card-title-overlay">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Card;
