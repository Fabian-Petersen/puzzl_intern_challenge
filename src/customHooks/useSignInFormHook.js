// $ This hook use the handleSubmit action from the SignInForm
// $ It also redirects the player to the game page
// $ Toasts are used to notify the player of the actions taken
// $ The hook is used in the SignInForm component

import { useGlobalContext } from "../customHooks/useGlobalContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useSignInFormHook = () => {
  const { setPlayerName } = useGlobalContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputName = e.target[0].value;

    if (!inputName) {
      toast.error("Please enter your name");
      return;
    }

    setPlayerName(inputName);
    navigate("/playgame");
    toast.info("Press Play to Start");
    toast.info(`Welcome ${inputName}`);
  };

  return { handleSubmit };
};

export default useSignInFormHook;
