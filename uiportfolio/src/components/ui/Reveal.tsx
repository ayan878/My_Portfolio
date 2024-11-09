import { useInView, motion, useAnimation } from "framer-motion";
import React, { ReactNode, useEffect, useRef } from "react";


// Define the prop types for the component
interface Props {
  children: ReactNode; 
  width?: "fit-content" | "100%"; 
}

// to proper implement use best line height according to font size
const Reveal = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null); 
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Trigger animations when the element is in view
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div
      className={`relative overflow-hidden ${
        width === "fit-content" ? "w-fit" : ""
      }`}
    >
      {/* Main content reveal */}
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>

      {/* Sliding background effect */}
      <motion.div
        className="absolute py-0 top-0 bottom-0 left-0 z-10 bg-primary"
        variants={{
          hidden: { x: "-100%" },
          visible: { x: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
      />
    </div>
  );
};

export default Reveal;
