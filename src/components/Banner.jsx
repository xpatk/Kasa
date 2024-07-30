import PropTypes from "prop-types";

function Banner({ src, alt, text, className }) {
  return (
    <div className={`banner ${className}`}>
      <img className="img-banner" src={src} alt={alt} />
      <h2>{text}</h2>
    </div>
  );
}

Banner.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Banner;
