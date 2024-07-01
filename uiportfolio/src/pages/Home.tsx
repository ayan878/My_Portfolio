// import { TypeAnimation } from "react-type-animation";
// import { motion, useTransform, useViewportScroll } from "framer-motion";
// import Navbar from "../components/Navbar";
// import { BubbleText } from "../components/ui/BubbleText";
// import NeuLink from "../components/ui/BoxShadowLink";
// import { useAnimatedBackgroundColor } from "../components/utils/backgroundUtils";
// import myPic from "../assets/ayan.jpg"
// import { IoReorderThree } from "react-icons/io5";
// import { BiHome } from "react-icons/bi";
// import {  PiLessThanBold } from "react-icons/pi";
// import { MessageCircle, PhoneCall } from "lucide-react";
// import { BsWhatsapp } from "react-icons/bs";
// import { SiLeetcode } from "react-icons/si";

// function Home() {

//     const { scrollYProgress } = useViewportScroll();
//     const rotate = useTransform(scrollYProgress, [0, 1], [-8, 0]);
//     const { backgroundColor } = useAnimatedBackgroundColor();
//   return (
//     <div id="home" className="h-screen">
//       <Navbar />
//       <div className="grid grid-cols-1 md:grid-cols-2 md:mt-10 px-12 md:px-0">
//         <div className="p-8 md:pl-16 md:pr-8">
//           <h1 className="text-5xl font-extrabold font-paytone">
//             WELCOME, to my CodeSpace
//           </h1>

//           <TypeAnimation
//             className="text-blue-400 text-4xl font-bold font-outfit mb-2 mt-6"
//             sequence={[
//               "I'm Ayan Raza",
//               1000,
//               "I'm Front-End Developer",
//               1000,
//               "I'm Back-End Developer",
//               1000,
//               "I'm Software Engineer",
//               1000,
//             ]}
//             wrapper="span"
//             speed={50}
//             style={{ fontSize: "2em", display: "inline-block" }}
//             repeat={Infinity}
//           />
//           <BubbleText className="font-paytone mb-4 md:mb-8 mt-2" />
//           <NeuLink name="Hire Me" icon="" />
//         </div>
//         <motion.div
//           className="relative h-full w-2/5 lg:w-5/5 rounded-xl shadow-[3px_6px_0px_black] md:mr-14"
//           style={{
//             rotate,
//             backgroundColor,
//             transformStyle: "preserve-3d",
//             transform: "rotateY(25deg)",
//           }}
//         >
//           <motion.div
//             style={{
//               // rotate,
//               backgroundColor,
//               transformStyle: "preserve-3d",
//             }}
//             className="absolute inset-0 grid rounded-xl shadow-lg border-2 border-black"
//           >
//             <motion.div
//               style={{
//                 // rotate,
//                 backgroundColor,
//                 transformStyle: "preserve-3d",
//               }}
//               className="absolute inset-2 grid rounded-xl shadow-lg border-2 border-black"
//             >
//               <img
//                 src={myPic}
//                 alt="Ayan Raza"
//                 className="absolute rounded-xl w-full h-full mx-auto lg:mx-0"
//               />
//               <div className="absolute flex justify-around items-center w-full bottom-10 p-1">
//                 <PhoneCall className=" text-blue-600 w-8 h-8 bg-blue-400 rounded-xl p-1" />
//                 <MessageCircle className=" text-white w-8 h-8 bg-blue-400 rounded-xl p-1" />
//                 <BsWhatsapp className=" text-green-400 w-8 h-8 bg-blue-400 rounded-xl p-1" />
//                 <SiLeetcode className=" text-yellow-600 h-8 w-8 bg-blue-400 rounded-xl p-1" />
//               </div>
//               <div className="absolute flex items-center justify-around bottom-0 w-full h-8 rounded-bl-xl rounded-br-xl bg-pink-600">
//                 <IoReorderThree className="text-yellow-300 w-6 h-6 " />
//                 <BiHome className="text-yellow-300 w-6 h-6" />
//                 <PiLessThanBold className="text-yellow-300 w-8 h-6" />
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import { TypeAnimation } from "react-type-animation";
import Navbar from "../components/Navbar";
import { BubbleText } from "../components/ui/BubbleText";
import NeuLink from "../components/ui/BoxShadowLink";
import ShuffleCard from "../components/ShuffleCards";
import React from "react";

const Home:React.FC=()=> {
  return (
    <div id="home" className="w-full min-h-screen">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 px-4 md:px-12 ">
        <div className="p-8 md:pl-16 md:pr-8">
          <h1 className="text-5xl md:text-5xl font-extrabold font-paytone tracking-wide md:mt-4">
            WELCOME, to my CodeSpace
          </h1>
          <TypeAnimation
            className="text-blue-400 text-3xl md:text-4xl font-bold font-outfit mb-2 mt-6"
            sequence={[
              "I'm Ayan Raza",
              1000,
              "I'm a Front-End Developer",
              1000,
              "I'm a Back-End Developer",
              1000,
              "I'm a Software Engineer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1.5em", display: "inline-block" }}
            repeat={Infinity}
          />

          <BubbleText className="font-paytone mb-4 md:mb-8 mt-2" />

          <NeuLink name="Hire Me"/>
        </div>
        <div className="mr-20">
          <ShuffleCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
