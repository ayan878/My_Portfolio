import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import RightArrow from "../assets/img/right-arrow.svg";
import Astronaut from "../assets/img/header-img.svg";
import TextMotion from "../components/TextMotion";
import DesktopNavbar from "../components/DesktopNavbar";

function HomeDesktop() {
  return (
    <div id="home" className="h-screen ">
      <DesktopNavbar />
      <div className="grid grid-cols-2 mt-10">
        <div className="pl-16">
          <h3 className="text-white font-custom border w-fit px-2 bg-purple-900 mb-4">
            Welcome to my CodeSpace
          </h3>
          <TypeAnimation
            className="text-purple-400 text-4xl font-bold mb-2"
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
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <TextMotion />
          <a className="text-white font-semibold flex items-center mt-4">
            <span>Let's Connect</span>
            <img src={RightArrow} alt="Right Arrow" className="ml-2" />
          </a>
        </div>
        <div>
          <motion.img
            className="ml-16 w-96"
            src={Astronaut}
            alt="My Animated Image"
            animate={{
              opacity: 1,
              y: [0, -50, 0],
              scale: 1,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: false,
            }}
            initial={{
              opacity: 0,
              y: 0,
              scale: 0.5,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeDesktop;
