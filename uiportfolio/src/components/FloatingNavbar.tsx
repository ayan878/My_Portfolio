import { Link as ScrollLink } from "react-scroll";
import { FaHome, FaCodeBranch, FaUser } from "react-icons/fa";
import { LuBrainCog } from "react-icons/lu";
import { motion } from "framer-motion";
import { useAnimatedBackgroundColor } from "./utils/backgroundUtils";

function FloatingNavbar() {
  const { backgroundColor } = useAnimatedBackgroundColor();
  return (
    <motion.div
      className="fixed top-1/2 right-8 md:right-12 transform -translate-y-1/2 flex flex-col w-7 md:w-10 justify-evenly items-center gap-4 rounded-full z-50 shadow-[3px_6px_0px_black]"
      style={{ backgroundColor }}
    >
      <ScrollLink
        to="home"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        activeClass="active-link"
        className="text-white p-2 cursor-pointer"
      >
        <FaHome className="text-sm md:text-2xl text-yellow-300" />
      </ScrollLink>
      <ScrollLink
        to="skills"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        activeClass="active-link"
        className="text-white p-2 cursor-pointer"
      >
        <LuBrainCog className="text-sm md:text-2xl text-yellow-300" />
      </ScrollLink>

      <ScrollLink
        to="projects"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        activeClass="active-link"
        className="text-white p-2 cursor-pointer"
      >
        <FaCodeBranch className="text-sm md:text-2xl text-yellow-300" />
      </ScrollLink>
      <ScrollLink
        to="about"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        activeClass="active-link"
        className="text-white p-2 cursor-pointer"
      >
        <FaUser className="text-sm md:text-2xl text-yellow-300" />
      </ScrollLink>
    </motion.div>
  );
}

export default FloatingNavbar;
