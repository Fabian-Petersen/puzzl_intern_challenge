import Heading from "../components/Heading";
import ScoreCardContainer from "../components/ScoreCardContainer";
import PlayOptionsContainer from "./PlayOptionsContainer";
import ControlsContainer from "../components/ControlsContainer";

const GameContainer = () => {
  return (
    <section className="flex flex-col p-2 sm:p-8 gap-6 bg-gray-100 rounded-lg w-[90%] max-w-[50rem] shadow-lg">
      <Heading
        className={`text-textLight text-heading-clamp text-center tracking-wider`}
        title="Rock - Paper - Scissors"
      />
      <ScoreCardContainer />
      <PlayOptionsContainer />
      <div className="bg-gray-200 rounded-lg">
        <ControlsContainer />
      </div>
    </section>
  );
};

export default GameContainer;
