import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-toastify";

const usePlayGameHook = (option) => {
  const { playersOption, setComputerOption, computerOption, setPlayersOption } =
    useGlobalContext();
  const navigate = useNavigate();
  const { setPlayerName, setPlayerScore, setComputerScore } =
    useGlobalContext();

  const handleGameControl = () => {
    // $ Function handles the reset button to set the scores back to zero
    if (option === "reset") {
      setComputerOption("");
      setPlayersOption("");
    }

    // $ Function handles the play button
    if (option === "play") {
      const randomNumber = Math.floor(Math.random() * 3);
      const computerOptionsAvailable = ["rock", "paper", "scissors"];
      setComputerOption(computerOptionsAvailable[randomNumber]);

      // $ Option 1 - If the player and computer options are the same, it is a draw
      if (playersOption === computerOption) {
        toast.info("It is a draw");
      } else if (
        (playersOption === "rock" && computerOption === "scissors") ||
        (playersOption === "scissors" && computerOption === "paper")
      ) {
        toast.success("You win");
        setPlayerScore((prevState) => prevState + 1);
      } else if (playersOption === "rock" && computerOption === "paper") {
        toast.error("Computer wins");
        setComputerScore((prevState) => prevState + 1);
      }
      console.log("player :", playersOption);
      console.log("computer :", computerOption);
    }

    // $ Exit the game and navigate to the home page
    if (option === "exit") {
      navigate("/");
      setPlayerName("");
      toast.success("You have successfully logged out");
    }
  };
  return { handleGameControl };
};

export default usePlayGameHook;
