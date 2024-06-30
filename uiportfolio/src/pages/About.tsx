import myPic from "../assets/ayan.jpg";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useAnimatedBackgroundColor } from "../components/utils/backgroundUtils";
import NeuButton from "../components/ui/BoxShadowButton";

const AboutMe = () => {
  const { scrollYProgress } = useViewportScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const { backgroundColor } = useAnimatedBackgroundColor();

  return (
    <div
      id="about"
      className="bg-white lg:flex lg:flex-col lg:items-center p-6 md:p-12 lg:justify-between mx-4"
    >
      <div className="relative lg:flex lg:flex-row flex flex-col items-center justify-center md:justify-start">
        <motion.div
          className="relative h-96 w-72 lg:w-5/5 rounded-xl border-2 shadow-[3px_3px_0_black] border-black md:mr-14"
          style={{
            rotate,
            backgroundColor,
            transformStyle: "preserve-3d",
            transform: "rotateY(25deg)",
          }}
        >
          <motion.div
            style={{
              rotate,
              backgroundColor,
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-0 grid rounded-xl border-2 border-black shadow-[3px_3px_0_black]"
          >
            <motion.div
              style={{
                rotate,
                backgroundColor,
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-2 grid rounded-xl shadow-[3px_3px_0_black] border-2 border-black"
            >
              <img
                src={myPic}
                alt="Ayan Raza"
                className="absolute rounded-xl w-full h-full mx-auto lg:mx-0 inset-0"
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0">
          <h2 className="text-5xl font-paytone font-bold text-yellow-300 font-outline-1">
            About Me
          </h2>
          <p className="text-gray-600 text-2xl font-outfit mt-4 mb-4">
            Experience slick whiteboard usability whiteboard users, clean users
            goal. Design thinking journey map component informative map risk
            agile slick interaction. Aesthetics persona journey map research
            agile aesthetics, agile delight interaction service design.
          </p>
          <div className="flex justify-center md:justify-start">
            <NeuButton name="www.codeSpace.com" />
          </div>
        </div>
      </div>
      <div className="mt-6 lg:mt-0 lg:flex lg:flex-row lg:space-x-6 text-center lg:text-center md:ml-24">
        <div className="lg:w-1/3">
          <h3 className="text-5xl font-paytone text-indigo-600 font-outline-2">
            20+
          </h3>
          <p className="text-yellow-300 text-3xl font-bold font-outline-1">
            Years of Experience
          </p>
        </div>
        <div className="lg:w-1/3 mt-4 lg:mt-0">
          <h3 className="text-5xl font-paytone text-indigo-600 font-outline-2">
            15+
          </h3>
          <p className="text-yellow-300 text-3xl font-bold font-outline-1">
            Award Winning
          </p>
        </div>
        <div className="lg:w-1/3 mt-4 lg:mt-0 ">
          <h3 className="text-5xl font-paytone text-indigo-600 font-outline-2">
            100+
          </h3>
          <p className="text-yellow-300 text-3xl font-bold font-outline-1">
            Projects Done
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

