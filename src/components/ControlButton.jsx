// $ validate the props passed to the component using prop-types
// $ The nadle Control Hook manages the state of the game i.e. play, reset and exit
import PropTypes from "prop-types";
import { Tooltip } from "flowbite-react";

import usePlayGameHook from "../customHooks/usePlayGameHook";

// $ Create a component that receives two props: img and the option (which button it is)

const ControlButton = ({ img, option, className }) => {
  const { handleGameControl } = usePlayGameHook(option);
  return (
    <Tooltip content={option} position="top">
      <button
        onClick={() => handleGameControl(option)}
        className={`hover:scale-[1.05] hover:shadow-md ${className} w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full shadow-lg p-2 flex justify-center items-center hover:cursor-pointer transition-all`}
      >
        <img src={img} alt={option} />
      </button>
    </Tooltip>
  );
};

ControlButton.propTypes = {
  img: PropTypes.string,
  option: PropTypes.string,
  className: PropTypes.string,
};

export default ControlButton;
