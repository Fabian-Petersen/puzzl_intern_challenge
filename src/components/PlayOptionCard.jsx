// validate the props passed to the component using prop-types
import { Tooltip } from "flowbite-react";
import PropTypes from "prop-types";
import { useGlobalContext } from "../customHooks/useGlobalContext";

// $ Create a component that receives two props: img and alt to create each component for the 3 options to play
const PlayOptionCard = ({ img, option }) => {
  const { setPlayersOption, playersOption, computerOption } =
    useGlobalContext();
  return (
    <Tooltip content={option} placement="top">
      <button
        onClick={() => setPlayersOption(option)}
        className={`${
          playersOption === option
            ? "border-blue-500"
            : "border-blue-200" && computerOption === option
            ? "border-red-500"
            : "border-blue-200"
        }
          flex justify-center w-20 h-20 hover:border-blue-200 bg-white sm:w-32 sm:h-32 rounded-full shadow-lg p-4 
          items-center hover:scale-[1.05] hover:cursor-pointer transition-all border-4 border-gray-200`}
      >
        <img src={img} alt={option} />
      </button>
    </Tooltip>
  );
};

PlayOptionCard.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  option: PropTypes.string,
};

export default PlayOptionCard;
