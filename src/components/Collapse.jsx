import { useState } from "react";
import PropTypes from "prop-types";

const Collapse = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const arrowCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse-header" onClick={arrowCollapse}>
        {header}
      </button>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Collapse;
