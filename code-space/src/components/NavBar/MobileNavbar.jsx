// import { useState } from "react";
// import { Link } from "react-router-dom";
// import LinkedIn from "@assets/img/nav-icon1.svg";
// import Facebook from "@assets/img/nav-icon2.svg";
// import Twitter from "@assets/img/nav-icon3.svg";
// import Logo from "@assets/img/codeSpace.png";

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

