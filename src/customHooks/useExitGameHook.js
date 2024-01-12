// $ This hook will be used to exit the game.
// $ It will be used in the ControlButton component.
// $ the option passed to the hook from the ControlButton will be used to determine which button was clicked

import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-toastify";

const useExitGameHook = (buttonOption) => {
  const navigate = useNavigate();
  const {
    setPlayerName,
    setIsGameStarted,
    playerScore,
    computerScore,
    setPlayerScore,
    setComputerScore,
  } = useGlobalContext();

  if (buttonOption) {
    // $ Reset the game score and player details
    const handleGameExit = () => {
      setTimeout(() => {
        toast.success("You have successfully logged out");
        navigate("/");
        setIsGameStarted(false);
        setPlayerName("");
        setPlayerScore(0);
        setComputerScore(0);
      }, [3500]);

      // $ Display a toast message to the user based on the result of the game
      if (playerScore > computerScore) {
        toast.success("You won the game!");
      } else if (playerScore < computerScore) {
        toast.error("You lost, try again!");
      } else {
        toast.info("The game ended in a draw!");
      }
    };
    return { handleGameExit };
  }
};
export default useExitGameHook;
