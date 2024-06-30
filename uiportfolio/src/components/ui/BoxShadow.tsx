
// function BoxShadow() {
//   return (
//     <div className="bg-white flex items-center justify-between w-96 h-16 ">
//       <div className="rounded-full text-2xl justify-between flex px-6 py-2 font-bold bg-indigo-500 text-white w-fit transition-all shadow-[3px_6px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
//         Welcome to my codeSpace
//       </div>
//     </div>
//   );
// }

// export default BoxShadow;


import { useAnimate } from "framer-motion";
import React from "react";

interface NeuBtn {
  name: string;
}
const BoxShadow: React.FC<NeuBtn> = ({ name }) => {
  const [scope, animate] = useAnimate();

  const mouseHover = () => {
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
    <div
      ref={scope}
      className="bg-white flex items-center justify-between w-64"
    >
      <button
        onMouseOver={mouseHover}
        className="button text-2xl font-outfit items-center gap-2 mx-auto rounded-full justify-between flex px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_5px_0px_black]"
      >
        {name}
      </button>
    </div>
  );
};

export default BoxShadow;
