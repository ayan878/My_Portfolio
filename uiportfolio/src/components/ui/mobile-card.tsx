
import { motion, useScroll, useTransform } from "framer-motion";
import { PhoneCall, MessageCircle } from "lucide-react";
import { IoReorderThree } from "react-icons/io5";
import { BiHome } from "react-icons/bi";
import { PiLessThanBold } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { useAnimatedBackgroundColor } from "../utils/backgroundUtils";
import React from "react";


interface MobileProps {
  pic: string; // Assuming pic is a string representing the image source
  onDragEnd: () => void; // Assuming onDragEnd is a function with no arguments and no return value
}

const Mobile: React.FC<MobileProps> = ({ pic, onDragEnd }) => {
  const { backgroundColor } = useAnimatedBackgroundColor();
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <motion.div
      className="relative h-2/5 sm:h-3/5 md:h-full w-3/5 md:w-4/5 rounded-xl mr-4 shadow-md mx-auto"
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
        className="absolute inset-0 grid rounded-xl border-2 border-black shadow-[6px_6px_0px_black]"
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
};

export default Mobile;
