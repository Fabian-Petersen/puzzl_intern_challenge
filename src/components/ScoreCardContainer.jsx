// ? Purpose: To display the score of the players
// $ The stats are passed from the useGlobalContext hook (playerName, playerScore, computerScore)

import PropTypes from "prop-types";
import { useGlobalContext } from "../customHooks/useGlobalContext";
const ScoreCardContainer = () => {
  const { playerName, playerScore, computerScore } = useGlobalContext();

  return (
    <div className="flex flex-col gap-4 text-[1rem] md:text-[1.2rem] tracking-wider xs:flex xs:flex-row xs:justify-between px-0 sm:p-4 capitalize text-textLight">
      <div className="flex flex-col">
        <p>score : {playerScore}</p>
        <p>Player 1 : {playerName}</p>
      </div>
      <div className="flex flex-col">
        <p>score : {computerScore}</p>
        <p>Player 2 : Computer</p>
      </div>
    </div>
  );
};

ScoreCardContainer.propTypes = {
  name: PropTypes.string,
  playerScore: PropTypes.number,
  computerScore: PropTypes.string,
};

export default ScoreCardContainer;
