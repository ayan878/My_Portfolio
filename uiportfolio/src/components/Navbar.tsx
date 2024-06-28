
import Logo from "../assets/codeSpace.png";
import { FaGithub, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Linkedin } from "lucide-react";
import HoverLink from "./ui/navbar-flip";
import { useAnimatedBackgroundColor } from "./utils/backgroundUtils";
import {motion} from "framer-motion"


const Navbar = () => {
  const {backgroundColor}=useAnimatedBackgroundColor();
  return (
    <motion.nav style={{backgroundColor}} className="flex justify-between items-center p-4 bg-[#1d1840] bg-opacity-80 px-12">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-14 h-14" />
        <span className="text-2xl text-white font-bold font-paytone">
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

      <div className="flex justify-between items-center">
        {/* Social icons */}
        <a
          href="https://github.com/ayan878"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-8 h-8 mx-2 text-white" />
        </a>
        <a
          href="https://www.linkedin.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-8 h-8 mx-2 text-blue-400" />
        </a>
        <a href="#">
          <SiLeetcode className="w-8 h-8 mx-2 text-yellow-400" />
        </a>
        <a href="https://www.twitter.com">
          <FaHackerrank className="w-8 h-8 mx-2 text-green-400" />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
