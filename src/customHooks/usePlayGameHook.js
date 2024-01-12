import { useEffect } from "react";
import { useGlobalContext } from "../customHooks/useGlobalContext";
// import usePlayersSelectedOption from "./usePlayersSelectedOption";
import { toast } from "react-toastify";

const usePlayGameHook = () => {
  const { setComputerSelectedOption, setPlayerSelectedOption } =
    useGlobalContext();

  const { playerSelectedOption, setPlayerScore, setComputerScore } =
    useGlobalContext();

  // $ This function handles the game play after the play button is clicked

  useEffect(() => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    const selectedOption = options[randomIndex];
    console.log(selectedOption);
    // setComputerSelectedOption(selectedOption);
  }, []);

  const handleGamePlay = () => {
    if (playerSelectedOption === "") {
      toast.error("Please select an option");
      return;
    }

    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    const newComputerSelectedOption = options[randomIndex];
    setComputerSelectedOption(newComputerSelectedOption);

    handleResult(newComputerSelectedOption);

    setTimeout(() => {
      setComputerSelectedOption("");
      setPlayerSelectedOption("");
    }, [2500]);
  };

  const handleResult = (newComputerSelectedOption) => {
    if (
      playerSelectedOption === "rock" &&
      newComputerSelectedOption === "scissors"
    ) {
      toast.success("You win!");
      setPlayerScore((prevState) => prevState + 1);
    } else if (
      playerSelectedOption === "scissors" &&
      newComputerSelectedOption === "paper"
    ) {
      toast.success("You win!");
      setPlayerScore((prevState) => prevState + 1);
    } else if (
      playerSelectedOption === "paper" &&
      newComputerSelectedOption === "rock"
    ) {
      toast.success("You win!");
      setPlayerScore((prevState) => prevState + 1);
    } else if (
      playerSelectedOption === "rock" &&
      newComputerSelectedOption === "paper"
    ) {
      toast.error("You lose!");
      setComputerScore((prevState) => prevState + 1);
    } else if (
      playerSelectedOption === "scissors" &&
      newComputerSelectedOption === "rock"
    ) {
      toast.error("You lose!");
      setComputerScore((prevState) => prevState + 1);
    } else if (
      playerSelectedOption === "paper" &&
      newComputerSelectedOption === "scissors"
    ) {
      toast.error("You lose!");
      setComputerScore((prevState) => prevState + 1);
    } else if (playerSelectedOption === newComputerSelectedOption) {
      toast.info("It's a draw!");
    }
  };

  return { handleGamePlay };
};

export default usePlayGameHook;
