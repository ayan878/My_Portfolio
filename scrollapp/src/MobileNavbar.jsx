// import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaHome, FaLightbulb, FaCodeBranch } from "react-icons/fa";

function MobileNavbar() {
//   const location = useLocation();

  return (
    <div className="fixed top-1/2 right-12 transform -translate-y-1/2 flex flex-col w-10 shadow-2xl bg-purple-900 justify-evenly items-center gap-4 rounded-full">
      <ScrollLink
        to="home"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className={`text-white p-2 cursor-pointer ${
          location.pathname === "/home" || location.pathname === "/"
            ? "active-link"
            : ""
        }`}
      >
        <FaHome className="text-2xl" />
      </ScrollLink>
      <ScrollLink
        to="about"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className={`text-white p-2 cursor-pointer ${
          location.pathname === "/skills" ? "active-link" : ""
        }`}
      >
        <FaLightbulb className="text-2xl" />
      </ScrollLink>
      <ScrollLink
        to="services"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className={`text-white p-2 cursor-pointer ${
          location.pathname === "/projects" ? "active-link" : ""
        }`}
      >
        <FaCodeBranch className="text-2xl" />
      </ScrollLink>
      <ScrollLink
        to="contact"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className={`text-white p-2 cursor-pointer ${
          location.pathname === "/projects" ? "active-link" : ""
        }`}
      >
        <FaCodeBranch className="text-2xl" />
      </ScrollLink>
    </div>
  );
}

export default MobileNavbar;
