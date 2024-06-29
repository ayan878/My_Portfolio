
import { useEffect } from "react";
import { animate, useMotionTemplate, useMotionValue } from "framer-motion";

const COLORS_TOP = [" #e00a97", "#1E67C6", "#492971", "#DD335C"];

export const useAnimatedBackgroundColor = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundColor = useMotionTemplate`${color}`;
  const border = useMotionTemplate`2px solid ${color}`;

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  return { backgroundColor, border };
};
