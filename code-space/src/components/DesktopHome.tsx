import { motion } from "framer-motion";
import RightArrow from "@/assets/img/right-arrow.svg";
import Astronaut from "@/assets/img/header-img.svg";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import MajicButton from "./ui/MajicButton";
import { FaLocationArrow } from "react-icons/fa";

function HomeDesktop() {
  return (
    <div className="grid grid-cols-2 mt-14 bg-black">
      <div className="pl-16">
        <h3 className="text-white font-custom border w-fit px-2 bg-purple-900 mb-4">
          Welcome to my CodeSpace
        </h3>
        {/* <TypeAnimation
          className="text-purple-400 text-4xl font-bold mb-10"
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
        /> */}

        <p className="w-fit mb-10 text-xl text-white">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        {/* <Link href="/" className="text-white font-semibold flex items-center">
          <span>Let's Connect</span>
          <img src={RightArrow} alt="Right Arrow" />
        </Link> */}
      <Link href="/"><MajicButton title="Let's connect" icon={<FaLocationArrow/>} position="right"/></Link>
      </div>
      {/* <div>
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
            yoyo: Infinity,
          }}
          initial={{
            opacity: 0,
            y: 0,
            scale: 0.5,
          }}
        />
      </div> */}
    </div>
  );
}

export default HomeDesktop;
