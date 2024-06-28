import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import React, { useEffect } from "react";

interface BorderProps {
  title: string;
  className?: string;
}
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Border: React.FC<BorderProps> = ({ title, className }) => {
  const color = useMotionValue(COLORS_TOP[0]);
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 2px 16px ${color}`;
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.div
      style={{
        border,
        boxShadow,
      }}
      whileHover={{
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.985,
      }}
      className={`group relative flex w-fit items-center gap-1.5  bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50 ${className}`}
    >
      {title}
    </motion.div>
  );
};

export default Border;
