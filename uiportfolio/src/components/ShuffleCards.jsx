// // src/components/ShuffleCard.jsx
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const ShuffleCard = () => {
//   const [cards, setCards] = useState([1, 2, 3, 4, 5]);
  
//   const shuffleCards = () => {
//     setCards((prevCards) => {
//       const shuffled = [...prevCards];
//       for (let i = shuffled.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//       }
//       return shuffled;
//     });
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="relative w-64 h-96">
//         <AnimatePresence>
//           {cards.map((card, index) => (
//             <motion.div
//               key={card}
//               className="absolute w-full h-full bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold"
//               drag
//               dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
//               onDragEnd={shuffleCards}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               transition={{ duration: 0.5 }}
//               style={{ zIndex: cards.length - index }}
//             >
//               {card}
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default ShuffleCard;

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";

const ShuffleCard = () => {
  const [cards, setCards] = useState([1, 2, 3, 4, 5]);
  const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

  // Motion value for background color
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundColor = useMotionTemplate`${color}`;

  // Animate the background color
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut", // Easing function for smooth animation
      duration: 10, // Duration of each animation cycle (in seconds)
      repeat: Infinity, // Number of times to repeat the animation (Infinity for infinite)
      repeatType: "mirror", // Type of repeat behavior (mirror alternates direction each cycle)
    });
  }, []); // Run only once on component mount

  // Function to shuffle cards
  const shuffleCards = () => {
    setCards((prevCards) => {
      const shuffled = [...prevCards];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  };

  // Auto shuffle effect
  useEffect(() => {
    const interval = setInterval(shuffleCards, 1000); // Auto shuffle every 1 second
    return () => clearInterval(interval);
  }, []); // Run only once on component mount

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-64 h-96">
        <AnimatePresence>
          {cards.map((card, index) => (
            <motion.div
              key={card}
              className={`absolute w-full h-full rounded-lg flex items-center justify-center text-white text-2xl font-bold`}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              style={{
                zIndex: cards.length - index,
                backgroundColor: backgroundColor, // Apply animated background color here
              }}
            >
              {card}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ShuffleCard;
