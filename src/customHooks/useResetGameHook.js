// $ This hook will be used to reset the game, i.e the score and the options chosen.
// $ It will be used in the ControlButton component.
// $ the option passed to the hook from the ControlButton will be used to determine which button was clicked

import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-toastify";
// import useComputerSelectedOption from "./useComputerSelectedOption";

const useResetGameHook = (option) => {
  const {
    setPlayerSelectedOption,
    setComputerSelectedOption,
    setPlayerScore,
    setComputerScore,
  } = useGlobalContext();

  if (option) {
    const handleGameReset = () => {
      setPlayerSelectedOption("");
      setComputerSelectedOption("");
      setPlayerScore(0);
      setComputerScore(0);
      toast.info("Game has been reset");
    };
    return { handleGameReset };
  }
};
export default useResetGameHook;
