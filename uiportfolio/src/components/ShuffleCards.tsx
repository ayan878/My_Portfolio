// // import React, { useEffect,useState } from "react";
// // import { AnimatePresence } from "framer-motion";
// // import Mobile from "./ui/mobile-card";
// // import myPic from "@/assets/ayan.jpg";
// // import banner from "@/assets/banner-bg.png";
// // import logo from "@/assets/codeSpace.png";


// // const ShuffleCard = () => {
// //   const pics = [myPic, banner, logo];
// //   const [cards, setCards] = useState(pics);

// //   // Function to shuffle cards in a circular queue manner
// //   const shuffleCards = () => {
// //     setCards((prevCards) => {
// //       const shuffled = [...prevCards];
// //       const topCard = shuffled.shift();
// //       shuffled.push(topCard);
// //       return shuffled;
// //     });
// //   };

// //   //! Auto shuffle effect  if need then uncomment
// //   // useEffect(() => {
// //   //   const interval = setInterval(shuffleCards, 3000); // Auto shuffle every 3 seconds
// //   //   return () => clearInterval(interval);
// //   // }, []);

// //   return (
// //     <div className="flex justify-center items-center h-screen">
// //       <div className="relative w-full h-full">
// //         <AnimatePresence>
// //           {cards.map((pic, index) => (
// //             <Mobile key={index} pic={pic} onDragEnd={shuffleCards} />
// //           ))}
// //         </AnimatePresence>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ShuffleCard;

// //! Above card is in Blocks to make it card here i ehnanced it 

// // import React, { useState } from "react";
// // import { AnimatePresence } from "framer-motion";
// // import Mobile from "./ui/mobile-card";
// // import myPic from "@/assets/ayan.jpg";
// // import banner from "@/assets/banner-bg.png";
// // import logo from "@/assets/codeSpace.png";


// // const ShuffleCard = () => {
// //   const pics = [myPic, banner, logo];
// //   const [cards, setCards] = useState(pics);

// //   // Function to shuffle cards in a circular queue manner
// //   const shuffleCards = () => {
// //     setCards((prevCards) => {
// //       const shuffled = [...prevCards];
// //       const topCard = shuffled.shift();
// //       shuffled.push(topCard);
// //       return shuffled;
// //     });
// //   };

// //   return (
// //     <div className="flex justify-center items-center h-screen">
// //       <div className="relative w-full h-full">
// //         <AnimatePresence>
// //           {cards.map((pic, index) => (
// //             <Mobile key={index} pic={pic} onDragEnd={shuffleCards} />
// //           ))}
// //         </AnimatePresence>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ShuffleCard;



// // import React, { useState } from "react";
// // import { AnimatePresence } from "framer-motion";
// // import Mobile from "./ui/mobile-card";
// // import myPic from "@/assets/ayan.jpg";
// // import banner from "@/assets/banner-bg.png";
// // import logo from "@/assets/codeSpace.png";

// // const ShuffleCard = () => {
// //   const pics = [myPic, banner, logo];
// //   const [cards, setCards] = useState(pics);

// //   // Function to shuffle cards in a circular queue manner
// //   const shuffleCards = () => {
// //     setCards((prevCards) => {
// //       const shuffled = [...prevCards];
// //       const topCard = shuffled.shift();
// //       shuffled.push(topCard);
// //       return shuffled;
// //     });
// //   };

// //   return (
// //     <div className="flex justify-center items-center h-screen">
// //       <div className="relative w-full h-full">
// //         <AnimatePresence>
// //           {cards.slice(0, 3).map((pic, index) => (
// //             <div className="absolute w-full h-full inset-2">
// //               <Mobile key={index} pic={pic} onDragEnd={shuffleCards} />
// //             </div>
// //           ))}
// //         </AnimatePresence>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ShuffleCard;

// // import React, { useState } from "react";
// // import { motion, AnimatePresence} from "framer-motion";
// // import Mobile from "./ui/mobile-card";
// // import myPic from "@/assets/ayan.jpg";
// // import banner from "@/assets/banner-bg.png";
// // import logo from "@/assets/codeSpace.png";

// // const ShuffleCard = () => {
// //   const pics = [myPic, banner, logo];
// //   const [cards, setCards] = useState(pics);


// //   // Function to shuffle cards in a circular queue manner
// //   const shuffleCards = () => {
// //     setCards((prevCards) => {
// //       const shuffled = [...prevCards];
// //       const topCard = shuffled.shift();
// //       shuffled.push(topCard);
// //       return shuffled;
// //     });
// //   };

// //   return (
// //     <div className="flex justify-center items-center h-screen">
// //       <div className="relative w-full h-full">
// //         <AnimatePresence>
// //           {cards.map((pic, index) => (
// //             <motion.div
// //               key={index}
// //               className="absolute w-full h-full "
// //               style={{
// //                 rotate: index * 4 - 12,
// //                 top: index * 20,
// //                 left: index * 40,
// //                 zIndex: cards.length - index,
// //               }}
// //             >
// //               <Mobile pic={pic} onDragEnd={shuffleCards} />
// //             </motion.div>
// //           ))}
// //         </AnimatePresence>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ShuffleCard;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Mobile from "./ui/mobile-card";
// import myPic from "@/assets/ayan.jpg";
// import banner from "@/assets/banner-bg.png";
// import logo from "@/assets/codeSpace.png";

// const ShuffleCard: React.FC = () => {
//   const pics: string[] = [myPic, banner, logo];
//   const [cards, setCards] = useState<string[]>(pics);

//   // Function to shuffle cards in a circular queue manner
//   const shuffleCards = () => {
//     setCards((prevCards) => {
//       const shuffled = [...prevCards];
//       const topCard = shuffled.shift();
//       if (topCard) {
//         shuffled.push(topCard);
//       }
//       return shuffled;
//     });
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="relative md:w-full md:h-full border-4 border-black">
//         <AnimatePresence>
//           {cards.map((pic, index) => (
//             <motion.div
//               key={index}
//               className="absolute w-full h-full"
//               style={{
//                 rotate: index * 4 - 12,
//                 top: index * 20,
//                 left: index * 40,
//                 zIndex: cards.length - index,
//               }}
//             >
//               <Mobile pic={pic} onDragEnd={shuffleCards} />
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default ShuffleCard;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Mobile from "./ui/mobile-card";
import myPic from "@/assets/ayan.jpg";
import banner from "@/assets/banner-bg.png";
import logo from "@/assets/codeSpace.png";

const  ShuffleCard: React.FC = () => {
  const pics: string[] = [myPic, banner, logo];
  const [cards, setCards] = useState<string[]>(pics);

  // Function to shuffle cards in a circular queue manner
  const shuffleCards = () => {
    setCards((prevCards) => {
      const shuffled = [...prevCards];
      const topCard = shuffled.shift();
      if (topCard) {
        shuffled.push(topCard);
      }
      return shuffled;
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative -top-2 sm:top-4  md:top-8 mb-12 w-full h-full max-w-3xl max-h-3xl md:max-w-full md:max-h-full">
        <AnimatePresence>
          {cards.map((pic, index) => (
            <motion.div
              key={index}
              className="absolute w-full h-full "
              style={{
                rotate: index * 4 - 12,
                top: index * 20,
                left: index * 40,
                zIndex: cards.length - index,
              }}
            >
              <Mobile pic={pic} onDragEnd={shuffleCards} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ShuffleCard;
