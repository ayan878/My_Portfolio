import styles from "./Bubble.module.css";
import React from "react"

interface BubbleProps{
  className:string
}
export const BubbleText :React.FC<BubbleProps> =({className}) => {
  const text = `I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (in case you've got an empty canvas layin' around.`;

  //   const hoverTextStyle = {
  //     transition: "transform 0.3s ease-in-out, color 0.3s ease-in-out",
  //   };

  //   const hoverTextHoverStyle = {
  //     transform: "scale(1.2)",
  //     color: "#ff4500",
  //   };


  return (
    <h2 className={`text-lefl text-base sm:text-lg md:text-xl font-thin text-red-400 ${className}`}>
      {text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};


