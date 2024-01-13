// ? purpose: This component is a container for the play buttons. It is used in the GamePage component.
// $ The play buttons updates the state playerSelectedOption with the selected option (rock, paper, scissors).

import { Tooltip } from "flowbite-react";
import rock from "../assets/images/icons8-rock-96.png";
import paper from "../assets/images/icons8-paper-96.png";
import scissors from "../assets/images/icons8-scissors-96.png";
import { useGlobalContext } from "../customHooks/useGlobalContext";

const PlayButtonContainer = () => {
  const {
    playerSelectedOption,
    computerSelectedOption,
    setPlayerSelectedOption,
  } = useGlobalContext();

  return (
    <div className="flex justify-center items-center flex-col sm:flex-row gap-4 sm:justify-around rounded-md p-10">
      <Tooltip
        content="rock"
        placement="top"
        className="tracking-wider capitalize"
      >
        <button
          onClick={() => setPlayerSelectedOption("rock")}
          className={`${
            playerSelectedOption === "rock"
              ? "border-blue-500"
              : "border-blue-200"
          } ${
            computerSelectedOption === "rock"
              ? "border-green-500"
              : "border-blue-200"
          } disabled:scale-[1] flex justify-center w-24 h-24 hover:border-blue-200 bg-white sm:w-32 sm:h-32 rounded-full shadow-lg p-4 
          items-center hover:scale-[1.05] hover:cursor-pointer transition-all border-4 border-blue-200`}
        >
          <img src={rock} alt="rock" />
        </button>
      </Tooltip>
      <Tooltip
        content="paper"
        placement="top"
        className="tracking-wider capitalize"
      >
        <button
          onClick={() => setPlayerSelectedOption("paper")}
          className={`${
            playerSelectedOption === "paper"
              ? "border-blue-500"
              : "border-blue-200"
          } ${
            computerSelectedOption === "paper"
              ? "border-green-500"
              : "border-blue-200"
          } disabled:scale-[1] flex justify-center w-24 h-24 hover:border-blue-200 bg-white sm:w-32 sm:h-32 rounded-full shadow-lg p-4 
          items-center hover:scale-[1.05] hover:cursor-pointer transition-all border-4 border-blue-200`}
        >
          <img src={paper} alt="rock" />
        </button>
      </Tooltip>
      <Tooltip
        content="scissors"
        placement="top"
        className="tracking-wider capitalize"
      >
        <button
          onClick={() => setPlayerSelectedOption("scissors")}
          className={`${
            playerSelectedOption === "scissors"
              ? "border-blue-500"
              : "border-blue-200"
          } ${
            computerSelectedOption === "scissors"
              ? "border-green-500"
              : "border-blue-200"
          } disabled:scale-[1] flex justify-center w-24 h-24 hover:border-blue-200 bg-white sm:w-32 sm:h-32 rounded-full shadow-lg p-4 
          items-center hover:scale-[1.05] hover:cursor-pointer transition-all border-4 border-blue-200`}
        >
          <img src={scissors} alt="scissors" />
        </button>
      </Tooltip>
    </div>
  );
};

export default PlayButtonContainer;
