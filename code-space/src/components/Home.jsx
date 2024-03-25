// import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import RightArrow from "../assets/img/right-arrow.svg";
import Astronaut from "../assets/img/header-img.svg";
function Home() {
  return (
    <div className="grid grid-cols-2 h-screen mt-14">
      <div className="px-16">
        <h3 className="text-white font-custom  border w-fit px-2 bg-purple-900 mb-4">
          Welcome to my CodeSpace
        </h3>
        <TypeAnimation
          className="text-white text-4xl font-bold mb-10"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "I'm Ayan Raza",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "I'm Front-End Developer",
            1000,
            "I'm Back-End Developer",
            1000,
            "I'm Software Engineer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />

        <p className="w-fit mb-10 text-xl text-white ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          fugit neque tempora, exercitationem ipsa iure repellat sapiente nulla
          illum asperiores!
        </p>
        <Link className=" text-white font-semibold flex space-x-1">
          <span>Let's Connect</span>
          <img src={RightArrow} />
        </Link>
      </div>
      <div>
        <motion.img
          className="ml-16 w-96"
          src={Astronaut}
          alt="My Animated Image"
          animate={{
            opacity: 1,
            y: [0, -50, 0], // Add keyframes for y-axis motion
            scale: 1,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            yoyo: Infinity, // Make the animation loop infinitely
          }}
          initial={{
            opacity: 0,
            y: 0, // Starting position
            scale: 0.5,
          }}
        />
      </div>
    </div>
  );
}

export default Home