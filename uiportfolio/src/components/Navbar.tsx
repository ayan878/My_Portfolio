import { Link as ScrollLink } from "react-scroll";
import Logo from "../assets/codeSpace.png";
import { FaGithub, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#1d1840] bg-opacity-80 px-12">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-14 h-14" />
        <span className="text-2xl text-white font-bold">codeSpace</span>
      </div>
      <div className="hidden md:flex justify-between items-center">
        {/* Desktop menu items */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="mx-4 text-white font-semibold cursor-pointer"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          className="mx-4 text-white font-semibold cursor-pointer"
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="mx-4 text-white font-semibold cursor-pointer"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="mx-4 text-white font-semibold cursor-pointer"
        >
          About Me
        </ScrollLink>
        <ScrollLink
          to="services"
          smooth={true}
          duration={500}
          className="mx-4 text-white font-semibold cursor-pointer"
        >
          Services
        </ScrollLink>
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
    </nav>
  );
};

export default Navbar;
