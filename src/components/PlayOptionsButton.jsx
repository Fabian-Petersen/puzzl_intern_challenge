// validate the props passed to the component using prop-types
import { Tooltip } from "flowbite-react";
import PropTypes from "prop-types";
import { useGlobalContext } from "../customHooks/useGlobalContext";

// $ Create a component that receives two props: img and playButtonOption to create each component for the 3 options to play
const PlayOptionsButton = ({ img, playButtonOption, alt }) => {
  const {
    setPlayerSelectedOption,
    playerSelectedOption,
    computerSelectedOption,
  } = useGlobalContext();

  return (
    <Tooltip
      content={playButtonOption}
      placement="top"
      className="tracking-wider capitalize"
    >
      <button
        onClick={() => {
          setPlayerSelectedOption(playButtonOption);
        }}
        className={`${
          playerSelectedOption === playButtonOption
            ? "border-blue-500"
            : "border-blue-200"
        } ${
          computerSelectedOption === playButtonOption
            ? "border-green-500"
            : "border-blue-200"
        } flex justify-center w-20 h-20 hover:border-blue-200 bg-white sm:w-32 sm:h-32 rounded-full shadow-lg p-4 
          items-center hover:scale-[1.05] hover:cursor-pointer transition-all border-4 border-blue-200`}
      >
        <img src={img} alt={alt} />
      </button>
    </Tooltip>
  );
};
PlayOptionsButton.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  playButtonOption: PropTypes.string,
};

export default PlayOptionsButton;
