// import React from "react";
// import { Link as ScrollLink } from "react-scroll";
// import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <ul>
//         <li>
//           <ScrollLink
//             activeClass="active"
//             to="home"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//           >
//             <FaHome /> Home
//           </ScrollLink>
//         </li>
//         <li>
//           <ScrollLink
//             activeClass="active"
//             to="about"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//           >
//             <FaUser /> About
//           </ScrollLink>
//         </li>
//         <li>
//           <ScrollLink
//             activeClass="active"
//             to="services"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//           >
//             <FaBriefcase /> Services
//           </ScrollLink>
//         </li>
//         <li>
//           <ScrollLink
//             activeClass="active"
//             to="contact"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//           >
//             <FaEnvelope /> Contact
//           </ScrollLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// // src/components/NavBar/NavBarDesktop.js
// import { Link } from "react-router-dom";
// import LinkedIn from "@assets/img/nav-icon1.svg";
// import Facebook from "@assets/img/nav-icon2.svg";
// import Twitter from "@assets/img/nav-icon3.svg";
// import Logo from "@assets/img/codeSpace.png";

// const NavBarDesktop = () => {
//   const handleScroll = (e, id) => {
//     e.preventDefault();
//     document.getElementById(id).scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <nav className="flex justify-between items-center p-4 bg-[#1d1840] bg-opacity-80">
//       <div className="flex items-center">
//         <img src={Logo} alt="Logo" className="w-14 h-14 ml-10" />
//         <span className="text-2xl text-white ml-2">codeSpace</span>
//       </div>
//       <div className="flex items-center">
//         <a
//           href="#home"
//           onClick={(e) => handleScroll(e, "home")}
//           className="mx-4 text-white font-semibold"
//         >
//           Home
//         </a>
//         <a
//           href="#skills"
//           onClick={(e) => handleScroll(e, "skills")}
//           className="mx-4 text-white font-semibold"
//         >
//           Skills
//         </a>
//         <a
//           href="#projects"
//           onClick={(e) => handleScroll(e, "projects")}
//           className="mx-4 text-white font-semibold"
//         >
//           Projects
//         </a>
//         <a
//           href="#about"
//           onClick={(e) => handleScroll(e, "about")}
//           className="mx-4 text-white font-semibold"
//         >
//           About Me
//         </a>
//         <div className="flex ml-4">
//           <Link to="https://www.linkedin.com/login">
//             <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8 mx-2" />
//           </Link>
//           <Link to="https://www.facebook.com">
//             <img src={Facebook} alt="Facebook" className="w-8 h-8 mx-2" />
//           </Link>
//           <Link to="https://www.twitter.com">
//             <img src={Twitter} alt="Twitter" className="w-8 h-8 mx-2" />
//           </Link>
//         </div>
//         <Link className="ml-4 p-2 border border-white text-white no-underline">
//           Let's Connect
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default NavBarDesktop;


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
