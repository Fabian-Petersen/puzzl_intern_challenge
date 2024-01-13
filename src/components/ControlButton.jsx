// ? Purpose: The component renders the play options component (rock, paper, scissors)
// $ The component receives three props: img, buttonOption and className to style the middle button differently
// $ The buttonOption prop identifies the button (play, reset or exit)
// $ Each button will call the custom hook which handles the logic for the game (play, exit and reset)

import PropTypes from "prop-types";
import { Tooltip } from "flowbite-react";

// $ cont... and the className prop to style the play button differently
import useExitGameHook from "../customHooks/useExitGameHook";
import useResetGameHook from "../customHooks/useResetGameHook";
import usePlayGameHook from "../customHooks/usePlayGameHook";

const ControlButton = ({ img, buttonOption, className }) => {
  const handleGameExit = useExitGameHook(buttonOption).handleGameExit;
  const handleGameReset = useResetGameHook(buttonOption).handleGameReset;
  const handleGamePlay = usePlayGameHook(buttonOption).handleGamePlay;

  const handleClick = () => {
    if (buttonOption === "play") {
      handleGamePlay();
    } else if (buttonOption === "reset") {
      handleGameReset();
    } else if (buttonOption === "exit") {
      handleGameExit();
    }
  };

  return (
    <Tooltip
      content={buttonOption}
      position="top"
      className="tracking-widest capitalize"
    >
      <button
        onClick={handleClick}
        className={`hover:scale-[1.05] hover:shadow-md ${className}
        } w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full shadow-lg p-2 sm:flex justify-center items-center hover:cursor-pointer transition-all`}
      >
        <img src={img} alt={buttonOption} />
      </button>
    </Tooltip>
  );
};

ControlButton.propTypes = {
  img: PropTypes.string,
  buttonOption: PropTypes.string,
  className: PropTypes.string,
  visible: PropTypes.string,
  invisible: PropTypes.string,
};

export default ControlButton;
