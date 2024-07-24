import PropTypes from "prop-types";
import { useState } from "react";

function Slider({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = pictures[currentIndex];

  return (
    <div className="container-slider">
      <div
        className="img-slider"
        style={{ backgroundImage: `url(${currentImage})` }}
      >
        <div className="left-arrow">&#10094;</div>
        <div className="right-arrow">&#10095;</div>
      </div>
    </div>
  );
}

Slider.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
