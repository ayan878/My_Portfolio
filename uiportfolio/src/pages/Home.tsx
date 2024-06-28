import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Astronaut from "../assets/header-img.svg"

import Navbar from "../components/Navbar";
import Border from "../components/ui/Border";
import { BubbleText } from "../components/ui/BubbleText";
import BoxShadow from "../components/ui/BoxShadow";
import NeuButton from "../components/ui/BoxShadowButton";

function Home() {
  return (
    <div id="home" className="h-screen">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 md:mt-10 px-12 md:px-0">
        <div className="p-8 md:pl-16 md:pr-8">
          {/* <Border title={"Welcome to my CodeSpace"} /> */}
          <BoxShadow/>
          <TypeAnimation
            className="text-blue-400 text-4xl font-bold mb-2 mt-6"
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
          <BubbleText className="mb-4 md:mb-8 mt-2" />
          <NeuButton/>
          {/* <Button title="Let's connect" /> */}
        </div>
        <div className="flex justify-center items-center">
          <motion.img
            className="w-3/4 max-w-md md:max-w-none"
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

export default Home;
