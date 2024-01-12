// Create useContext hook to manage the state of the game
import PropTypes from "prop-types";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState("");
  const [computerScore, setComputerScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [result, setResult] = useState(0);
  const [playerSelectedOption, setPlayerSelectedOption] = useState("");
  const [computerSelectedOption, setComputerSelectedOption] = useState("");

  return (
    <AppContext.Provider
      value={{
        playerName,
        setPlayerName,
        playerScore,
        setPlayerScore,
        computerScore,
        setComputerScore,
        result,
        setResult,
        playerSelectedOption,
        setPlayerSelectedOption,
        setComputerSelectedOption,
        computerSelectedOption,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
