
import React,{ useState } from "react";
import { motion } from "framer-motion";
import SpringModal from "../components/ui/SpringModal"; 
import { useAnimatedBackgroundColor } from "../components/utils/backgroundUtils";
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

const Skills = () => {
  const skills = [
    {
      title: "Figma",
      icon: <FaFigma className="text-3xl text-orange-600" />,
      description:
        "It's commonly used in web development for designing user interfaces and experiences (UI/UX). Figma allows collaboration and prototyping, making it essential for digital design workflows.",
    },
    {
      title: "React",
      icon: <FaReact className="text-3xl text-blue-300" />,
      description:
        "a JavaScript library renowned for building dynamic and responsive user interfaces. It facilitates component-based development, virtual DOM management, and efficient state handling, making it pivotal in modern web app development.",
    },
    {
      title: "Node.js",
      icon: <FaNode className="text-3xl text-green-600" />,
      description:
        "a runtime environment used for server-side scripting in JavaScript. Node.js enables scalable and efficient backend development, allowing developers to build fast and scalable network applications.",
    },
    {
      title: "Redux",
      icon: <TbBrandRedux className="text-3xl text-purple-500" />,
      description:
        "a predictable state container for JavaScript applications. It manages application state and facilitates predictable behavior across the application, making it ideal for managing complex data flows.",
    },
    {
      title: "JavaScript",
      icon: <FaJs className="text-3xl text-yellow-300" />,
      description:
        "a fundamental scripting language for web development. JavaScript adds interactivity to web pages, enabling dynamic content updates, user interaction enhancements, and integration with other technologies.",
    },
    {
      title: "CSS3",
      icon: <FaCss3Alt className="text-3xl text-blue-300" />,
      description:
        "a cornerstone technology for styling web pages. CSS3 enhances the visual presentation of HTML elements, enabling responsive design, animations, and customized layouts across different devices.",
    },
    {
      title: "React Query",
      icon: <SiReactquery className="text-3xl text-red-600" />,
      description:
        "React Query is used for fetching data or  a data-fetching library in React applications.React Query simplifies asynchronous data fetching, caching, and synchronization with the UI, optimizing performance and user experience.",
    },
    {
      title: "Java",
      icon: <FaJava className="text-3xl text-orange-600" />,
      description:
        "a widely-used programming language for building scalable enterprise applications. Java's platform independence, robustness, and extensive libraries make it suitable for large-scale software development projects.",
    },
    {
      title: "Next.js",
      icon: <SiNextdotjs className="text-3xl text-gray-500" />,
      description:
        " a React framework for building server-rendered and static websites. Next.js simplifies production-grade React applications with features like automatic code splitting, routing, and server-side rendering.",
    },
    {
      title: "MongoDB",
      icon: <SiMongodb className="text-3xl text-green-500" />,
      description:
        "a NoSQL database used for storing and retrieving data. MongoDB's document-oriented data model, scalability, and flexibility make it suitable for modern application development, particularly in data-intensive applications.",
    },
    {
      title: "MySQL",
      icon: <SiMysql className="text-3xl text-red-500" />,
      description:
        "a popular relational database management system. MySQL is known for its reliability, performance, and ease of use in managing structured data, making it a preferred choice for various web applications.",
    },
    {
      title: "Express.js",
      icon: <SiExpress className="text-3xl text-slate-800" />,
      description:
        " a minimal and flexible Node.js web application framework. Express.js simplifies building robust web applications and APIs with middleware, routing, and various HTTP utility methods.",
    },
    {
      title: "Framer Motion",
      icon: <FiFramer className="text-3xl text-purple-500" />,
      description:
        "a React library for adding fluid animations and gestures to applications. Framer Motion enhances user experience by enabling developers to create interactive and visually appealing animations seamlessly.",
    },
  ];

  const halfSkills = Math.ceil(skills.length / 2);
  const firstHalfOfArraySkills = skills.slice(0, halfSkills);
  const secondHalfOfArraySkills = skills.slice(halfSkills);

  const [isOpen, setIsOpen] = useState(Array(skills.length).fill(false)); // Array to track modal states

  const [showButton,setShowButton] =useState(true);
  const { backgroundColor } = useAnimatedBackgroundColor();

  const handleOpenModal = (index:number) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = true;
    setIsOpen(updatedIsOpen);
    setShowButton(false);
  };

  const handleCloseModal = (index:number) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = false;
    setIsOpen(updatedIsOpen);
    setShowButton(true);
  };

  return (
    <motion.section
      id="skills"
      className="relative min-h-vh  mb-8 p-4 text-gray-200 overflow-hidden "
    >
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-paytone text-center text-indigo-600 uppercase font-outline-2 mb-6 md:mt-16 font-extrabold">
        Skills
      </h1>

      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8">
          <pre className="font-paytone text-yellow-300 text-3xl md:text-4xl lg:text-5xl font-outline-1 uppercase text-center">
            <p> I have crafted myself with </p>
            <p> all these technologies</p>
          </pre>
          <div className="flex flex-wrap justify-center gap-4">
            {firstHalfOfArraySkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                onMouseEnter={() => handleOpenModal(index)}
                onMouseLeave={() => handleCloseModal(index)}
              >
                {showButton && (
                  <motion.button
                    className="w-12 h-12 md:w-16 md:h-16 p-3 rounded-full flex items-center justify-center shadow-[0px_6px_0_black]"
                    style={{ backgroundColor }}
                  >
                    {skill.icon}
                  </motion.button>
                )}
                <SpringModal
                  title={skill.title}
                  icon={skill.icon}
                  isOpen={isOpen[index]}
                  setIsOpen={() => handleCloseModal(index)}
                  backgroundColor={backgroundColor}
                  description={skill.description}
                />
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {secondHalfOfArraySkills.map((skill, index) => (
              <motion.div
                key={index + halfSkills}
                className="flex items-center gap-2"
                onMouseEnter={() => handleOpenModal(index + halfSkills)}
                onMouseLeave={() => handleCloseModal(index + halfSkills)}
              >
                {showButton && (
                  <motion.button
                    className="w-12 h-12 md:w-16 md:h-16 p-3 rounded-full flex items-center justify-center shadow-[0px_6px_0_black]"
                    style={{ backgroundColor }}
                  >
                    {skill.icon}
                  </motion.button>
                )}
                <SpringModal
                  title={skill.title}
                  icon={skill.icon}
                  isOpen={isOpen[index + halfSkills]}
                  setIsOpen={() => handleCloseModal(index + halfSkills)}
                  backgroundColor={backgroundColor}
                  description={skill.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
