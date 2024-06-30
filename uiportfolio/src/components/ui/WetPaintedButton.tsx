import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const dropletVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 20 },
  exit: { opacity: 0, y: 50 },
};

const WetPaintButton = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative">
        <button className="relative px-6 py-3 font-semibold text-white bg-indigo-600 rounded-lg overflow-hidden">
          <span className="relative z-10">Wet Paint Button</span>
          <AnimatePresence>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-2 bg-indigo-600 rounded-b-lg"
              initial={{ height: 0 }}
              animate={{ height: "0.5rem" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute left-1/4 bottom-0 w-1 h-3 bg-indigo-600 rounded-full"
              variants={dropletVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
            />
            <motion.div
              className="absolute left-1/2 bottom-0 w-1.5 h-4 bg-indigo-600 rounded-full"
              variants={dropletVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            <motion.div
              className="absolute left-3/4 bottom-0 w-1 h-3 bg-indigo-600 rounded-full"
              variants={dropletVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
};

export default WetPaintButton;
