import PropTypes from "prop-types";

function Host({ hosts }) {
  return (
    <div>
      {hosts.map((host, index) => (
        <div key={index} className="host">
          <span className="name">{host.name}</span>
          <img className="profile-picture" src={host.picture} alt={host.name} />
        </div>
      ))}
    </div>
  );
}

Host.propTypes = {
  hosts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Host;
