// ? Purpose: This component captures the player's name and passes it to the useSignInFormHook
// $ The useSignInFormHook then passes the name to the useGlobalContext hook to display the name in the ScoreCardContainer

import useSignInFormHook from "../customHooks/useSignInFormHook";
import avatar from "../assets/images/jurica-koletic.jpg";
import Avatar from "./Avatar";

const SignInForm = () => {
  const { handleSubmit } = useSignInFormHook();

  return (
    <div className="flex flex-col justify-between gap-2 bg-gray-200 p-6 sm:p-6 rounded-md text-textLight w-[16rem] h-[20rem] max-w-[20rem] text-center">
      <h2 className="text-2xl mb-4 text-textLight">Sign In</h2>

      <Avatar image={avatar} />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-end w-full gap-6"
      >
        <input
          type="text"
          placeholder="Enter Your Name"
          className="bg-white outline-none rounded-md p-2 w-full placeholder:text-sm focus:border-blue-500 focus:bg-gray-100 transition-all"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition-all w-full"
        >
          Start The Game
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
