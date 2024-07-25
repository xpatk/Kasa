import PropTypes from "prop-types";

const Rating = ({ rating }) => {
  const totalStars = 5;
  const ratingNumber = parseInt(rating, 10);

  const stars = Array.from({ length: totalStars }, (_, index) =>
    index < ratingNumber ? "filled" : "empty"
  );

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <span key={index} className={`star ${star}`}></span>
      ))}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
