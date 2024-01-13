// ? Purpose: The component renders the game container for all the (score, controls and play button) containers

import Heading from "../components/Heading";
import ScoreCardContainer from "../components/ScoreCardContainer";
import ControlsContainer from "../components/ControlsContainer";
import PlayButtonContainer from "./PlayButtonContainer";

const GameContainer = () => {
  return (
    <section className="flex flex-col p-2 sm:p-8 gap-6 bg-gray-100 rounded-lg w-[90%] max-w-[50rem] shadow-lg">
      <Heading
        className={`text-textLight text-2xl sm:text-[2rem] text-center tracking-wider`}
        title="Rock - Paper - Scissors"
      />
      <ScoreCardContainer />
      <PlayButtonContainer />
      <div className="bg-gray-50 rounded-lg">
        <ControlsContainer />
      </div>
    </section>
  );
};

export default GameContainer;
