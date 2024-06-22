import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import RightArrow from "@assets/img/right-arrow.svg";
import Astronaut from "@assets/img/header-img.svg";

function HomeMobile() {
  return (
    <div className="mt-14 p-4">
      <h3 className="text-white font-custom border border-white w-fit p-2 bg-purple-900 mb-4">
        Welcome to my CodeSpace
      </h3>
      <TypeAnimation
        className="text-white text-2xl font-bold mb-10"
        sequence={[
          "I'm Ayan Raza",
          1000,
          "I'm Front-End Developer",
          1000,
          "I'm Back-End Developer",
          1000,
          "I'm Software Engineer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
      <p className="text-white text-lg mb-10 w-fit">
        I'm a full stack developer (React.js & Node.js) with a focus on creating
        (and occasionally designing) exceptional digital experiences that are
        fast, accessible, visually appealing, and responsive. Even though I have
        been creating web applications for over 7 years, I still love it as if
        it was something new.
      </p>
      <Link className="flex items-center text-white font-semibold">
        <span>Let's Connect</span>
        <img src={RightArrow} alt="Right Arrow" className="ml-2" />
      </Link>
      <div className="mt-10 flex justify-center">
        <motion.img
          src={Astronaut}
          alt="My Animated Image"
          animate={{ opacity: 1, y: [0, -50, 0], scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut", yoyo: Infinity }}
          initial={{ opacity: 0, y: 0, scale: 0.5 }}
          className="w-96 ml-10"
        />
      </div>
    </div>
  );
}

export default HomeMobile;
