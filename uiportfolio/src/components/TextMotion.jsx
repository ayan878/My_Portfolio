
import { motion } from "framer-motion";
import "./TextMotion.css";
import { memo } from "react";

function TextMotion({className}) {
  return (
    <motion.h1
      className={`glitter-text ${className}`}
      initial={{ x: 0 }}
      animate={{ x: 0 }}
      transition={{ duration: 2, delay: 1 }}
    >
      I've spent the last 5 years building and scaling software for some pretty
      cool companies. I also teach people to paint online (incase you've got an
      empty canvas layin' around 🎨). Let's connect!
    </motion.h1>
  );
}


const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(200)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block"
        ></motion.span>
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);


export default TextMotion;
