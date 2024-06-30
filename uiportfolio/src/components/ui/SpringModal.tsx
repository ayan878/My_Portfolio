import React from "react";
import { motion, AnimatePresence, MotionValue } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  backgroundColor: MotionValue<string>;
  description: string;
  icon: React.ReactNode;
  title?: string;
};

const SpringModal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  backgroundColor,
  description,
  icon,
  title,
}) => {
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onMouseLeave={handleCloseModal}
          style={{ backgroundColor: backgroundColor.get() }} // Extract string value from MotionValue
          initial={{ scale: 0, rotate: "12.5deg" }}
          animate={{ scale: 1, rotate: "0deg" }}
          exit={{ scale: 0, rotate: "0deg" }}
          onClick={(e) => e.stopPropagation()}
          className="absolute top-1/4 left-1/4 text-white p-6 rounded-lg w-full max-w-lg shadow-[6px_6px_0px_black] cursor-default overflow-hidden"
        >
          <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
          <div className="relative z-10">
            <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl grid place-items-center mx-auto">
              {icon} {/* Render icon directly */}
            </div>
            <h3 className="text-3xl font-paytone text-center text-indigo-600 font-outline-0 mb-2 ">
              {title}
            </h3>
            <p className="text-center mb-6 font-outfit">{description}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;
