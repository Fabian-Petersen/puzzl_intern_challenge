// $ The Home page when the game is initially started.
// $ The player is asked to enter their name and then the game begins.

import SignInForm from "../components/SignInForm";

const StartGame = () => {
  return (
    <main className="relative flex flex-col justify-center items-center bg-white h-[100dvh]">
      <SignInForm />
    </main>
  );
};

export default StartGame;
