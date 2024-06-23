// import { useState } from "react";
// import { Link } from "react-router-dom";
// import LinkedIn from "@assets/img/nav-icon1.svg";
// import Facebook from "@assets/img/nav-icon2.svg";
// import Twitter from "@assets/img/nav-icon3.svg";
// import Logo from "@assets/img/codeSpace.png";

import { GitBranch, Home, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

// const NavBarMobile = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="flex justify-between items-center p-4 bg-[#1d1840] bg-opacity-80 fixed w-full">
//       <div className="flex items-center">
//         <img src={Logo} alt="Logo" className="w-14 h-14" />
//         <span className="text-2xl text-white ml-2">codeSpace</span>
//         <button className="ml-auto text-white text-3xl" onClick={handleToggle}>
//           ☰
//         </button>
//       </div>
//       {isOpen && (
//         <div className="absolute top-16 left-0 w-full bg-[#1d1840] bg-opacity-90 flex flex-col items-center p-4 space-y-4">
//           <Link to="/home" className="text-white font-semibold">
//             Home
//           </Link>
//           <Link to="/skills" className="text-white font-semibold">
//             Skills
//           </Link>
//           <Link to="/projects" className="text-white font-semibold">
//             Projects
//           </Link>
//           <Link to="/about" className="text-white font-semibold">
//             About Me
//           </Link>
//           <div className="flex space-x-2">
//             <Link to="https://www.linkedin.com/login">
//               <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8" />
//             </Link>
//             <Link to="https://www.facebook.com">
//               <img src={Facebook} alt="Facebook" className="w-8 h-8" />
//             </Link>
//             <Link to="https://www.twitter.com">
//               <img src={Twitter} alt="Twitter" className="w-8 h-8" />
//             </Link>
//           </div>
//           <Link className="border border-white px-4 py-2 text-white font-semibold">
//             Let's Connect
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBarMobile;

// import { useLocation } from "react-router-dom";
// import { FaHome, FaLightbulb, FaCodeBranch } from "react-icons/fa";

// function MobileNavbar() {
//   const location = useLocation();

//   const handleScroll = (e, id) => {
//     e.preventDefault();
//     document.getElementById(id).scrollIntoView({ behavior: "smooth" });
//   }

//   return (
//     <div className="fixed top-1/2 right-4  -translate-x-full flex flex-col w-10 shadow-2xl bg-purple-900 justify-evenly items-center gap-4 rounded-full">
//       <Link
//         activeClass="active"
//         to="home"
//         spy={true}
//         smooth={true}
//         offset={50}
//         duration={500}
//         onSetActive={handleSetActive}
//         className={`text-white p-2 ${
//           location.pathname === "/home" ? "active-link" : ""
//         }`}
//       >
//         <FaHome className="text-2xl" />
//       </Link>
//       <Link
//         activeClass="active"
//         to="/skills"
//         spy={true}
//         smooth={true}
//         offset={50}
//         duration={500}
//         onSetActive={handleSetActive}
//         className={`text-white p-2 ${
//           location.pathname === "/skills" ? "active-link" : ""
//         }`}
//       >
//         <FaLightbulb className="text-2xl" />
//       </Link>
//       <Link
//         activeClass="active"
//         to="/projects"
//         spy={true}
//         smooth={true}
//         offset={50}
//         duration={500}
//         onSetActive={handleSetActive}
//         className={`text-white p-2 ${
//           location.pathname === "/projects" ? "active-link" : ""
//         }`}
//       >
//         <FaCodeBranch className="text-2xl" />
//       </Link>
//     </div>
//   );
// }

// export default MobileNavbar;


// import { useLocation } from "react-router-dom";
// import { FaHome, FaLightbulb, FaCodeBranch } from "react-icons/fa";

// function MobileNavbar() {
//   const location = useLocation();
//   const handleScroll = (e, id) => {
//     e.preventDefault();
//     document.getElementById(id).scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="fixed top-1/2 right-4  -translate-x-full flex flex-col w-10 shadow-2xl bg-purple-900 justify-evenly items-center gap-4 rounded-full">
//       <a
//         href="#home"
//         onClick={(e) => handleScroll(e, "home")}
//         className={`text-white p-2 ${
//           location.hash === "#home" ? "active-link" : ""
//         }`}
//       >
//         <FaHome className="text-2xl" />
//       </a>
//       <a
//         href="#skills"
//         onClick={(e) => handleScroll(e, "skills")}
//         className={`text-white p-2 ${
//           location.hash === "#skills" ? "active-link" : ""
//         }`}
//       >
//         <FaLightbulb className="text-2xl" />
//       </a>
//       <a
//         href="#projects"
//         onClick={(e) => handleScroll(e, "projects")}
//         className={`text-white p-2 ${
//           location.hash === "#projects" ? "active-link" : ""
//         }`}
//       >
//         <FaCodeBranch className="text-2xl" />
//       </a>
//     </div>
//   );
// }

// export default MobileNavbar;

// import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaHome, FaLightbulb, FaCodeBranch } from "react-icons/fa";

function MobileNavbar() {
  // const location = useLocation();


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
        to="skills"
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
        to="projects"
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
    </div>
  );
}

export default MobileNavbar;
