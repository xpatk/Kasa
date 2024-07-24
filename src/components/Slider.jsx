import PropTypes from "prop-types";
import { useState } from "react";

function Slider({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = pictures[currentIndex];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container-slider">
      <div
        className="img-slider"
        style={{ backgroundImage: `url(${currentImage})` }}
      >
        <div className="left-arrow" onClick={goToPrevious}>
          &#10094;
        </div>
        <div className="right-arrow" onClick={goToNext}>
          &#10095;
        </div>
      </div>
    </div>
  );
}

Slider.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
