import { animate, useMotionTemplate, useMotionValue,motion } from 'framer-motion';
import { useEffect } from 'react'
import { FiArrowRight } from 'react-icons/fi';

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
function Button() {

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  //  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
   const border = useMotionTemplate`1px solid ${color}`;
   const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <motion.button
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
      className="group relative flex w-fit items-center gap-1.5  bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
    >
      Let's connect
      <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
    </motion.button>
  );
}

export default Button