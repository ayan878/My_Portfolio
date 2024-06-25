import { motion } from "framer-motion";

function Card() {
  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center"
      variants={cardVariants}
      whileHover="hover"
    >
      kfghsdhdkfvsbkhd
    </motion.div>
  );
}

export default Card;
