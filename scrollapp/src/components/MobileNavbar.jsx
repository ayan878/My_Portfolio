import { Link as ScrollLink } from "react-scroll";
import { FaHome, FaLightbulb, FaCodeBranch } from "react-icons/fa";

function MobileNavbar() {
  return (
    <div className="fixed top-1/2 right-8 md:right-12 transform -translate-y-1/2 flex flex-col w-7 md:w-10 bg-purple-900 justify-evenly items-center gap-4 rounded-full">
      <ScrollLink
        to="home"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        activeClass="active-link"
        className="text-white p-2 cursor-pointer"
      >
        <FaHome className="text-sm md:text-2xl" />
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
        <FaLightbulb className="text-sm md:text-2xl" />
      </ScrollLink>
      <ScrollLink
        to="services"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        activeClass="active-link"
        className="text-white p-2 cursor-pointer"
      >
        <FaCodeBranch className="text-sm md:text-2xl" />
      </ScrollLink>
      <ScrollLink
        to="contact"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        activeClass="active-link"
        className="text-white p-2 cursor-pointer"
      >
        <FaCodeBranch className="text-sm md:text-2xl" />
      </ScrollLink>
    </div>
  );
}

export default MobileNavbar;
