// $ The PlayGame page is where the game is played.
// $ The game is played in the GameContainer component.

import GameContainer from "../components/GameContainer";

const PlayGame = () => {
  return (
    <main className="bg-white h-[100dvh] flex justify-center items-center">
      <GameContainer />
    </main>
  );
};

export default PlayGame;
