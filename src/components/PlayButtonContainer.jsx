import playOptionsData from "../assets/playOptionsData";
import PlayOptionsButton from "./PlayOptionsButton";

const PlayButtonContainer = () => {
  return (
    <div className="flex justify-center items-center flex-col sm:flex-row gap-4 sm:justify-around rounded-md p-10">
      {playOptionsData.map((item) => {
        const { id, img, playButtonOption, alt } = item;
        return (
          <PlayOptionsButton
            key={id}
            img={img}
            playButtonOption={playButtonOption}
            alt={alt}
          />
        );
      })}
    </div>
  );
};

export default PlayButtonContainer;
