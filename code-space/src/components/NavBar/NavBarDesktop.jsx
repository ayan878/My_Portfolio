// src/components/NavBar/NavBarDesktop.js
import { Link } from "react-router-dom";
import LinkedIn from "@assets/img/nav-icon1.svg";
import Facebook from "@assets/img/nav-icon2.svg";
import Twitter from "@assets/img/nav-icon3.svg";
import Logo from "@assets/img/codeSpace.png";

const NavBarDesktop = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-[#1d1840] bg-opacity-80">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-14 h-14 ml-10" />
        <span className="text-2xl text-white ml-2">codeSpace</span>
      </div>
      <div className="flex items-center">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "home")}
          className="mx-4 text-white font-semibold"
        >
          Home
        </a>
        <a
          href="#skills"
          onClick={(e) => handleScroll(e, "skills")}
          className="mx-4 text-white font-semibold"
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={(e) => handleScroll(e, "projects")}
          className="mx-4 text-white font-semibold"
        >
          Projects
        </a>
        <a
          href="#about"
          onClick={(e) => handleScroll(e, "about")}
          className="mx-4 text-white font-semibold"
        >
          About Me
        </a>
        <div className="flex ml-4">
          <Link to="https://www.linkedin.com/login">
            <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8 mx-2" />
          </Link>
          <Link to="https://www.facebook.com">
            <img src={Facebook} alt="Facebook" className="w-8 h-8 mx-2" />
          </Link>
          <Link to="https://www.twitter.com">
            <img src={Twitter} alt="Twitter" className="w-8 h-8 mx-2" />
          </Link>
        </div>
        <Link className="ml-4 p-2 border border-white text-white no-underline">
          Let's Connect
        </Link>
      </div>
    </nav>
  );
};

export default NavBarDesktop;
