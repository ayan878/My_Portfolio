
// import myPic from "@/assets/ayan.jpg";
// import { IoReorderThree } from "react-icons/io5";
// import { BiHome } from "react-icons/bi";
// import { PiLessThanBold } from "react-icons/pi";
// import { MessageCircle, PhoneCall } from "lucide-react";
// import { BsWhatsapp } from "react-icons/bs";
// import { SiLeetcode } from "react-icons/si";
// import { useAnimatedBackgroundColor } from '../utils/backgroundUtils';
// import {motion, useTransform, useViewportScroll } from 'framer-motion';


// function Mobile() {
//       const { scrollYProgress } = useViewportScroll();
//       const rotate = useTransform(scrollYProgress, [0, 1], [-8, 0]);
//       const { backgroundColor } = useAnimatedBackgroundColor();

//   return (
//     <>
//       <motion.div
//         className="relative h-72 md:h-full w-2/5 md:w-3/5 rounded-xl shadow-[3px_6px_0px_black] mx-auto md:mr-14"
//         style={{
//           rotate,
//           backgroundColor,
//           transformStyle: "preserve-3d",
//           transform: "rotateY(25deg)",
//         }}
//       >
//         <motion.div
//           style={{
//             backgroundColor,
//             transformStyle: "preserve-3d",
//           }}
//           className="absolute inset-0 grid rounded-xl shadow-lg border-2 border-black"
//         >
//           <motion.div
//             style={{
//               backgroundColor,
//               transformStyle: "preserve-3d",
//             }}
//             className="absolute inset-2 grid rounded-xl shadow-lg border-2 border-black"
//           >
//             <img
//               src={myPic}
//               alt="Ayan Raza"
//               className="absolute rounded-xl w-full h-full mx-auto lg:mx-0"
//             />
//             <div className="absolute flex justify-around items-center w-full bottom-10 p-1">
//               <PhoneCall className=" text-blue-600 w-8 h-8 bg-blue-400 rounded-xl p-1" />
//               <MessageCircle className=" text-white w-8 h-8 bg-blue-400 rounded-xl p-1" />
//               <BsWhatsapp className=" text-green-400 w-8 h-8 bg-blue-400 rounded-xl p-1" />
//               <SiLeetcode className=" text-yellow-600 h-8 w-8 bg-blue-400 rounded-xl p-1" />
//             </div>
//             <div className="absolute flex items-center justify-around bottom-0 w-full h-8 rounded-bl-xl rounded-br-xl bg-pink-600">
//               <IoReorderThree className="text-yellow-300 w-6 h-6 " />
//               <BiHome className="text-yellow-300 w-6 h-6" />
//               <PiLessThanBold className="text-yellow-300 w-8 h-6" />
//             </div>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </>
//   );
// }

// export default Mobile

// import React from "react";
// import { motion, useTransform, useViewportScroll } from "framer-motion";
// import { PhoneCall, MessageCircle } from "lucide-react";
// import { IoReorderThree } from "react-icons/io5";
// import { BiHome } from "react-icons/bi";
// import { PiLessThanBold } from "react-icons/pi";
// import { BsWhatsapp } from "react-icons/bs";
// import { SiLeetcode } from "react-icons/si";
// import { useAnimatedBackgroundColor } from "../utils/backgroundUtils";

// function Mobile({ pic }) {
//   const { scrollYProgress } = useViewportScroll();
//   const rotate = useTransform(scrollYProgress, [0, 1], [-8, 0]);
//   const { backgroundColor } = useAnimatedBackgroundColor();

//   return (
//     <motion.div
//       className="relative h-72 md:h-full w-2/5 md:w-3/5 rounded-xl shadow-[3px_6px_0px_black] mx-auto md:mr-14"
//       style={{
//         rotate,
//         backgroundColor,
//         transformStyle: "preserve-3d",
//         transform: "rotateY(25deg)",
//       }}
//       drag
//       dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
//     >
//       <motion.div
//         style={{
//           backgroundColor,
//           transformStyle: "preserve-3d",
//         }}
//         className="absolute inset-0 grid rounded-xl shadow-lg border-2 border-black"
//       >
//         <motion.div
//           style={{
//             backgroundColor,
//             transformStyle: "preserve-3d",
//           }}
//           className="absolute inset-2 grid rounded-xl shadow-lg border-2 border-black"
//         >
//           <img
//             src={pic}
//             alt="Ayan Raza"
//             className="absolute rounded-xl w-full h-full mx-auto lg:mx-0"
//           />
//           <div className="absolute flex justify-around items-center w-full bottom-10 p-1">
//             <PhoneCall className="text-blue-600 w-8 h-8 bg-blue-400 rounded-xl p-1" />
//             <MessageCircle className="text-white w-8 h-8 bg-blue-400 rounded-xl p-1" />
//             <BsWhatsapp className="text-green-400 w-8 h-8 bg-blue-400 rounded-xl p-1" />
//             <SiLeetcode className="text-yellow-600 h-8 w-8 bg-blue-400 rounded-xl p-1" />
//           </div>
//           <div className="absolute flex items-center justify-around bottom-0 w-full h-8 rounded-bl-xl rounded-br-xl bg-pink-600">
//             <IoReorderThree className="text-yellow-300 w-6 h-6" />
//             <BiHome className="text-yellow-300 w-6 h-6" />
//             <PiLessThanBold className="text-yellow-300 w-8 h-6" />
//           </div>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Mobile;

// import React from "react";
// import { motion } from "framer-motion";
// import { PhoneCall, MessageCircle } from "lucide-react";
// import { IoReorderThree } from "react-icons/io5";
// import { BiHome } from "react-icons/bi";
// import { PiLessThanBold } from "react-icons/pi";
// import { BsWhatsapp } from "react-icons/bs";
// import { SiLeetcode } from "react-icons/si";
// import { useAnimatedBackgroundColor } from "../utils/backgroundUtils";

// function Mobile({ pic, onDragEnd }) {
//   const { backgroundColor } = useAnimatedBackgroundColor();

//   return (
//     <motion.div
//       className="relative h-72 md:h-full w-2/5 md:w-3/5 rounded-xl shadow-[16px_8px_0px_black] mx-auto md:mr-14"
//       style={{
//         backgroundColor,
//         transformStyle: "preserve-3d",
//         transform: "rotateY(25deg)",
//       }}
//       drag
//       dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
//       onDragEnd={onDragEnd}
//     >
//       <motion.div
//         style={{
//           backgroundColor,
//           transformStyle: "preserve-3d",
//         }}
//         className="absolute inset-0 grid rounded-xl shadow-lg border-2 border-black"
//       >
//         <motion.div
//           style={{
//             backgroundColor,
//             transformStyle: "preserve-3d",
//           }}
//           className="absolute inset-3 grid rounded-xl shadow-lg border-2 border-black"
//         >
//           <img
//             src={pic}
//             alt="Ayan Raza"
//             className="absolute rounded-xl w-full h-full mx-auto lg:mx-0"
//           />
//           <div className="absolute flex justify-around items-center w-full bottom-10 p-1">
//             <PhoneCall className="text-blue-600 w-8 h-8 bg-blue-400 rounded-xl p-1" />
//             <MessageCircle className="text-white w-8 h-8 bg-blue-400 rounded-xl p-1" />
//             <BsWhatsapp className="text-green-400 w-8 h-8 bg-blue-400 rounded-xl p-1" />
//             <SiLeetcode className="text-yellow-600 h-8 w-8 bg-blue-400 rounded-xl p-1" />
//           </div>
//           <div className="absolute flex items-center justify-around bottom-0 w-full h-8 rounded-bl-xl rounded-br-xl bg-pink-600">
//             <IoReorderThree className="text-yellow-300 w-6 h-6" />
//             <BiHome className="text-yellow-300 w-6 h-6" />
//             <PiLessThanBold className="text-yellow-300 w-8 h-6" />
//           </div>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Mobile;

import { motion, useTransform, useViewportScroll } from "framer-motion";
import { PhoneCall, MessageCircle } from "lucide-react";
import { IoReorderThree } from "react-icons/io5";
import { BiHome } from "react-icons/bi";
import { PiLessThanBold } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { useAnimatedBackgroundColor } from "../utils/backgroundUtils";

function Mobile({ pic, onDragEnd }) {
  const { backgroundColor } = useAnimatedBackgroundColor();
  const { scrollYProgress } = useViewportScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <motion.div
      className="relative h-4/5 md:h-full w-3/5 md:w-4/5 rounded-xl border-1 shadow-[6px_6px_0px_black] mx-auto"
      style={{
        rotate,
        backgroundColor,
        transformStyle: "preserve-3d",
        transform: "rotateY(25deg)",
      }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragEnd={onDragEnd}
    >
      <motion.div
        style={{
          backgroundColor,
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 grid rounded-xl border-2 border-black"
      >
        <img
          src={pic}
          alt="Ayan Raza"
          className="absolute rounded-xl w-full h-full mx-auto lg:mx-0"
        />
        <div className="absolute flex justify-around items-center w-full bottom-10 p-1">
          <PhoneCall className="text-blue-600 w-8 h-8 bg-blue-400 rounded-xl p-1" />
          <MessageCircle className="text-white w-8 h-8 bg-blue-400 rounded-xl p-1" />
          <BsWhatsapp className="text-green-400 w-8 h-8 bg-blue-400 rounded-xl p-1" />
          <SiLeetcode className="text-yellow-600 h-8 w-8 bg-blue-400 rounded-xl p-1" />
        </div>
        <div className="absolute flex items-center justify-around bottom-0 w-full h-8 rounded-bl-xl rounded-br-xl bg-pink-600">
          <IoReorderThree className="text-yellow-300 w-6 h-6" />
          <BiHome className="text-yellow-300 w-6 h-6" />
          <PiLessThanBold className="text-yellow-300 w-8 h-6" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Mobile;
