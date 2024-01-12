import PropTypes from "prop-types";
import { useGlobalContext } from "../customHooks/useGlobalContext";

const TestComponent = ({ img, playButtonOption, alt }) => {
  const { test, setTest } = useGlobalContext();

  return (
    <button
      onClick={() => {
        setTest(playButtonOption);
        console.log("testOption :", test);
      }}
      className="flex justify-center w-20 h-20 hover:border-blue-200 bg-white sm:w-32 sm:h-32 rounded-full shadow-lg p-4 
          items-center hover:scale-[1.05] hover:cursor-pointer transition-all border-4 border-gray-200"
    >
      <img src={img} alt={alt} />
    </button>
  );
};
TestComponent.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  playButtonOption: PropTypes.string,
};

export default TestComponent;
