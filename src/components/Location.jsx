import PropTypes from "prop-types";

function Location({ location }) {
  return <p className="location">{location}</p>;
}

Location.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Location;
