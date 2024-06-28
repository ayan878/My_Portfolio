import { FiArrowRight } from "react-icons/fi";
import { useAnimate } from "framer-motion";

const NeuButton = () => {
  const [scope, animate] = useAnimate();

  const handleClick = () => {
    animate([
      [".button", { scale: 1, boxShadow: "none" }, { duration: 0.000001 }],
      [".rightArrow", { rotate: -25 }, { duration: 0.1, at: "<" }],

      [".rightArrow", { rotate: 0 }, { duration: 0.1 }],
      [
        "button",
        { scale: 1, boxShadow: "3px 5px 0px black" },
        { duration: 0.1 },
      ]
    ]);
  };

  return (
    <div
      ref={scope}
      className="bg-white flex items-center justify-between w-64"
    >
      <button
        onClick={handleClick}
        className="button text-2xl font-outfit items-center gap-2 rounded-full justify-between flex px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_5px_0px_black]"
      >
        Hire Me
        <FiArrowRight onClick={handleClick} className="rightArrow" />
      </button>
    </div>
  );
};

export default NeuButton;
