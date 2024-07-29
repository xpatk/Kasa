import { useState } from "react";
import PropTypes from "prop-types";

const Collapse = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const arrowCollapse = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header">
        <span>{header}</span>
        <button className="collapse-arrow" onClick={arrowCollapse}>
          {isOpen ? "▼" : "▲"}
        </button>
      </div>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapse;
