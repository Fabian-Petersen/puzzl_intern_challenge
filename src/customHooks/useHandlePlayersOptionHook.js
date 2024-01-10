// $ This hook handles the players option to be compared with the computer's option

const useHandlePlayersOptionHook = (option) => {
  const handlePlayersOption = () => {
    console.log(option);
  };

  return { handlePlayersOption };
};

export default useHandlePlayersOptionHook;
