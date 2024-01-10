import optionsData from "../assets/optionsData";
import PlayOptionCard from "./PlayOptionCard";

const PlayOptionsContainer = () => {
  return (
    <div className="flex justify-center items-center flex-col sm:flex-row gap-4 sm:justify-around rounded-md p-10">
      {optionsData.map((item) => {
        const { id, img, option } = item;
        return (
          <PlayOptionCard key={id} img={img} option={option} alt={option} />
        );
      })}
    </div>
  );
};

export default PlayOptionsContainer;
