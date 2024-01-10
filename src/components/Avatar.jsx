import PropTypes from "prop-types";

const Avatar = ({ image }) => {
  return (
    <div className="mx-auto flex overflow-hidden justify-center items-center w-24 h-24 border-4 border-slate-900 rounded-full">
      <img className="rounded-full w-24 h-24" src={image} alt="avatar image" />
    </div>
  );
};

Avatar.propTypes = {
  image: PropTypes.string,
};
export default Avatar;
