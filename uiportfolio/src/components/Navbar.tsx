import Logo from "../assets/codeSpace.png";
import { FaGithub, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Linkedin } from "lucide-react";
import HoverLink from "./ui/navbar-flip";
import { useAnimatedBackgroundColor } from "./utils/backgroundUtils";
import {motion} from "framer-motion"
import React from "react"


const Navbar:React.FC = () => {
  const {backgroundColor}=useAnimatedBackgroundColor();
  return (
    <motion.nav
      style={{ backgroundColor }}
      className="flex justify-between  items-center p-4 bg-opacity-80 px-16"
    >
      <div className="flex items-center md:ml-14 border-2 border-black">
        <img
          src={Logo}
          alt="Logo"
          className="w-10 h-10 sm:w-12 sm:h-12  md:w-14 md:h-14"
        />
        <span className="text-xl md:text-3xl text-indigo-600 font-paytone font-outline-0 ">
          codeSpace
        </span>
      </div>
      <div className="hidden md:flex justify-between items-center">
        {/* Desktop menu items */}
        <HoverLink name="Home" />
        <HoverLink name="Skills" />
        <HoverLink name="Projects" />
        <HoverLink name="About" />
      </div>

      <div className="flex justify-between items-center  border-2 border-black">
        {/* Social icons */}
        <a
          href="https://github.com/ayan878"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-4 h-4 md:w-8 md:h-8 mx-2 md:mx-4 text-white" />
        </a>
        <a
          href="https://www.linkedin.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-4 h-4 md:w-8 md:h-8 mx-2 md:mx-4 text-blue-400" />
        </a>
        <a href="#">
          <SiLeetcode className="w-4 h-4 md:w-8 md:h-8 mx-2 md:mx-4 text-yellow-400" />
        </a>
        <a href="https://www.twitter.com">
          <FaHackerrank className="w-4 h-4 md:w-8 md:h-8 mx-2m:;mx-4 text-green-400" />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;


// import React from "react";
// import { FaGithub, FaHackerrank } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";
// import { Linkedin } from "lucide-react";
// import HoverLink from "./ui/navbar-flip";
// import { useAnimatedBackgroundColor } from "./utils/backgroundUtils";
// import { motion } from "framer-motion";
// import Logo from "../assets/codeSpace.png";

// const Navbar: React.FC = () => {
//   const { backgroundColor } = useAnimatedBackgroundColor();
//   return (
//     <motion.nav
//       style={{ backgroundColor }}
//       className="f justify-between items-center p-4 bg-[#1d1840] bg-opacity-80"
//     >
//       <div className="flex items-center md:ml-14 mb-4 md:mb-0">
//         <img src={Logo} alt="Logo" className="w-14 h-14" />
//         <span className="text-3xl text-indigo-600 font-paytone font-outline-0 ml-2">
//           codeSpace
//         </span>
//       </div>
//       <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full lg:w-auto mb-4 lg:mb-0">
//         {/* Desktop menu items */}
//         <div className="hidden lg:flex lg:items-center lg:space-x-4">
//           <HoverLink name="Home" />
//           <HoverLink name="Skills" />
//           <HoverLink name="Projects" />
//           <HoverLink name="About" />
//         </div>
//         <div className="flex justify-center lg:justify-end items-center w-full lg:w-auto space-x-2 lg:space-x-4">
//           {/* Social icons */}
//           <a
//             href="https://github.com/ayan878"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaGithub className="w-8 h-8 text-white" />
//           </a>
//           <a
//             href="https://www.linkedin.com/login"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Linkedin className="w-8 h-8 text-blue-400" />
//           </a>
//           <a href="#">
//             <SiLeetcode className="w-8 h-8 text-yellow-400" />
//           </a>
//           <a href="https://www.twitter.com">
//             <FaHackerrank className="w-8 h-8 text-green-400" />
//           </a>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;
