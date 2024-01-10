import controlData from "../assets/controlData";
import ControlButton from "./ControlButton";

const ControlsContainer = () => {
  return (
    <div className="w-[50%] flex gap-6 sm:gap-8 justify-center items-center rounded-md p-2 sm:p-4 mx-auto">
      {controlData.map((item) => {
        const { id, img, option, className } = item;
        return (
          <ControlButton
            key={id}
            img={img}
            option={option}
            alt={option}
            className={className}
          />
        );
      })}
    </div>
  );
};

export default ControlsContainer;
