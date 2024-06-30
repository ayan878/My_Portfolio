import {
  FaFigma,
  FaReact,
  FaNode,
  FaJs,
  FaCss3Alt,
  FaJava,
} from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import {
  SiReactquery,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiExpress,
} from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { motion } from "framer-motion";
import { useAnimatedBackgroundColor } from "../components/utils/backgroundUtils";

const Contact = () => {
  const skills = [
    {
      icon: <FaFigma className="text-3xl text-orange-600" />,
      description: "Figma is used for designing UI/UX templates.",
    },
    {
      icon: <FaReact className="text-3xl text-blue-300" />,
      description: "React is used for building dynamic user interfaces.",
    },
    {
      icon: <FaNode className="text-3xl text-green-600" />,
      description: "Node.js is used for server-side scripting.",
    },
    {
      icon: <TbBrandRedux className="text-3xl text-purple-500" />,
      description: "Redux is used for managing application state.",
    },
    {
      icon: <FaJs className="text-3xl text-yellow-300" />,
      description: "JavaScript is used for adding interactivity to web pages.",
    },
    {
      icon: <FaCss3Alt className="text-3xl text-blue-300" />,
      description: "CSS3 is used for styling web pages.",
    },
    {
      icon: <SiReactquery className="text-3xl text-red-600" />,
      description:
        "React Query is used for fetching data in React applications.",
    },
    {
      icon: <FaJava className="text-3xl text-orange-600" />,
      description:
        "Java is used for building scalable enterprise applications.",
    },
    {
      icon: <SiNextdotjs className="text-3xl text-gray-500" />,
      description:
        "Next.js is used for building static and server-side rendered React applications.",
    },
    {
      icon: <SiMongodb className="text-3xl text-green-500" />,
      description: "MongoDB is used for storing and retrieving data.",
    },
    {
      icon: <SiMysql className="text-3xl text-red-500" />,
      description: "MySQL is used for managing relational databases.",
    },
    {
      icon: <SiExpress className="text-3xl text-slate-800" />,
      description: "Express.js is used for building web applications and APIs.",
    },
    {
      icon: <FiFramer className="text-3xl text-purple-500" />,
      description:
        "Framer Motion is used for adding animations to React applications.",
    },
  ];

  const halfSkills = Math.ceil(skills.length / 2);
  const firstHalfOfArraySkills = skills.slice(0, halfSkills);
  const secondHalfOfArraySkills = skills.slice(halfSkills);

  const { backgroundColor } = useAnimatedBackgroundColor();
  const cardVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.5,
      y: -24,
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="skills"
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >
      <h1 className="text-7xl font-paytone text-center text-indigo-600 uppercase font-outline-1 mb-4 font-extrabold">
        Skills
      </h1>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <pre className="font-paytone text-yellow-300 text-5xl font-outline-1 uppercase">
            <p className="text-6xl mx-auto"> I have crafted my Self with </p>
            <p className="text-center"> all these technology</p>
          </pre>
          <div className="flex gap-4 mx-auto">
            {firstHalfOfArraySkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                className="flex items-center gap-2"
              >
                <motion.div
                  className="w-16 h-16 p-3 rounded-full flex items-center justify-center shadow-[0px_6px_0_black]"
                  style={{ backgroundColor }}
                >
                  {skill.icon}
                </motion.div>
                {/* <span className="text-lg">{skill.description}</span> */}
              </motion.div>
            ))}
          </div>
          <div className="flex mx-auto gap-4">
            {secondHalfOfArraySkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                className="flex items-center gap-2"
              >
                <motion.div
                  className="w-16 h-16 p-3 rounded-full flex items-center justify-center shadow-[0px_6px_0_black]"
                  style={{ backgroundColor }}
                >
                  {skill.icon}
                </motion.div>
                {/* <span className="text-lg">{skill.description}</span> */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
