import React from "react";
import { useAnimate } from "framer-motion";

interface NeuBtnProps {
  name: string;
}

const NeuButton: React.FC<NeuBtnProps> = ({ name }) => {
  const [scope, animate] = useAnimate();

  const handleClick = () => {
    animate([
      [".button", { scale: 1, boxShadow: "none" }, { duration: 0.1 }],
      [".button", { rotate: 0 }, { duration: 0.1, at: "<" }],
      [".button", { rotate: 0 }, { duration: 0.1 }],
      [
        "button",
        { scale: 1, boxShadow: "3px 5px 0px black" },
        { duration: 0.1 },
      ],
    ]);
  };

  return (
    <div className="bg-white flex items-center justify-between w-64">
      <div ref={scope}>
        <button
          onClick={handleClick}
          className="button text-2xl font-outfit items-center gap-2 mx-auto rounded-full justify-between flex px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_5px_0px_black]"
        >
          {name}
        </button>
      </div>
    </div>
  );
};

export default NeuButton;
