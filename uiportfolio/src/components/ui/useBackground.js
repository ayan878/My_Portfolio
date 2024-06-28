import { useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

function useBackground() {
  // Initialize motion value with the first color from COLORS_TOP
  const color = useMotionValue(COLORS_TOP[0]);

  // Create a motion template for background color
  const backgroundColor = useMotionTemplate`${color}`;

  // Effect to start the animation when the component mounts
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut", // Easing function for smooth animation
      duration: 10, // Duration of each animation cycle (in seconds)
      repeat: Infinity, // Number of times to repeat the animation (Infinity for infinite)
      repeatType: "mirror", // Type of repeat behavior (mirror alternates direction each cycle)
    });
  }, []); // Empty dependency array ensures the effect runs only once after initial mount

  // Return the animated background color template
  return backgroundColor;
}

export default useBackground;
