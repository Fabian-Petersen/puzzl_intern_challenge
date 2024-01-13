// ? Purpose: This component is the parent component for the control buttons (play, reset and exit)
// $ The data is mapped over the controlData array and passed to the ControlButton component
// $ The props { id, img, buttonOption, className } are destructured from the controlData array and passed to the ControlButton component

import controlData from "../assets/controlData";
import ControlButton from "./ControlButton";

const ControlsContainer = () => {
  return (
    <div className="w-[50%] flex gap-6 sm:gap-8 justify-center items-center rounded-md p-2 sm:p-4 mx-auto">
      {controlData.map((item) => {
        const { id, img, buttonOption, className } = item;
        return (
          <ControlButton
            key={id}
            img={img}
            buttonOption={buttonOption}
            alt={buttonOption}
            className={className}
          />
        );
      })}
    </div>
  );
};

export default ControlsContainer;
