// ? Purpose: The heading component which passes the title and className props to the Heading component

import PropTypes from "prop-types";

const Heading = ({ title, className }) => {
  return <h1 className={className}>{title}</h1>;
};

Heading.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Heading;
