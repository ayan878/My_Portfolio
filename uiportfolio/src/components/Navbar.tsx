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
      className="flex justify-between items-center p-4 px-4 md:px-8 lg:px-16"
    >
      <div className="flex items-center ml-8 sm:ml-10 md:ml-14">
        <img
          src={Logo}
          alt="Logo"
          className="w-10 h-10 sm:w-12 sm:h-12  md:w-14 md:h-14"
        />
        <span className="text-xl md:text-3xl text-indigo-600 font-paytone font-outline-0 ">
          codeSpace
        </span>
      </div>
      <div className="hidden lg:flex justify-between items-center">
        {/* Desktop menu items */}
        <HoverLink name="Home" />
        <HoverLink name="Skills" />
        <HoverLink name="Projects" />
        <HoverLink name="About" />
      </div>

      <div className="flex justify-between items-center">
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

