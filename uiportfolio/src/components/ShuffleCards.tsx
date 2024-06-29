import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Mobile from "./ui/mobile-card";
import myPic from "@/assets/ayan.jpg";
import banner from "@/assets/banner-bg.png";
import logo from "@/assets/codeSpace.png";
import { Blocks } from "lucide-react";

const ShuffleCard = () => {
  const pics = [myPic, banner, logo];
  const [cards, setCards] = useState(pics);

  // Function to shuffle cards in a circular queue manner
  const shuffleCards = () => {
    setCards((prevCards) => {
      const shuffled = [...prevCards];
      const topCard = shuffled.shift();
      shuffled.push(topCard);
      return shuffled;
    });
  };

  //! Auto shuffle effect  if need then uncomment
  // useEffect(() => {
  //   const interval = setInterval(shuffleCards, 3000); // Auto shuffle every 3 seconds
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-full h-full">
        <AnimatePresence>
          {cards.map((pic, index) => (
            <Mobile key={index} pic={pic} onDragEnd={shuffleCards} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ShuffleCard;

//! Above card is in Blocks

