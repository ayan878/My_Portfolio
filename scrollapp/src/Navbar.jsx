import { Link as ScrollLink } from "react-scroll";
import LinkedIn from "./assets/img/nav-icon1.svg";
import Facebook from "./assets/img/nav-icon2.svg";
import Twitter from "./assets/img/nav-icon3.svg";
import Logo from "./assets/img/codeSpace.png";


const NavBarDesktop = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#1d1840] bg-opacity-80">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-14 h-14 ml-10" />
        <span className="text-2xl text-white ml-2">codeSpace</span>
      </div>
      <div className="flex items-center">
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
        <div className="flex ml-4">
          <a href="https://www.linkedin.com/login">
            <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8 mx-2" />
          </a>
          <a href="https://www.facebook.com">
            <img src={Facebook} alt="Facebook" className="w-8 h-8 mx-2" />
          </a>
          <a href="https://www.twitter.com">
            <img src={Twitter} alt="Twitter" className="w-8 h-8 mx-2" />
          </a>
        </div>
        <a
          href="#"
          className="ml-4 p-2 border border-white text-white no-underline"
        >
          Let's Connect
        </a>
      </div>
    </nav>
  );
};

export default NavBarDesktop;
