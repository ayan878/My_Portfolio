// import React from "react";
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card";
// import SkillsImg from "../assets/img/Skills.png";
// import { TbBrandRedux } from "react-icons/tb";
// import { SiReactquery } from "react-icons/si";
// import { FaCss3Alt, FaFigma, FaJs, FaNode, FaReact } from "react-icons/fa";

// function Skills() {
//   // Define array of skills with icon and description
//   const skills = [
//     {
//       icon: <FaFigma className="text-3xl" />,
//       description: "Figma is used to design template UI.",
//     },
//     {
//       icon: <FaReact className="text-3xl" />,
//       description: "React is used to design template UI.",
//     },
//     {
//       icon: <FaNode className="text-3xl" />,
//       description: "Node.js is used to design template UI.",
//     },
//     {
//       icon: <TbBrandRedux className="text-3xl" />,
//       description: "Redux is used to design template UI.",
//     },
//     {
//       icon: <FaJs className="text-3xl" />,
//       description: "JavaScript is used to design template UI.",
//     },
//     {
//       icon: <FaCss3Alt className="text-3xl" />,
//       description: "CSS3 is used to design template UI.",
//     },
//     {
//       icon: <SiReactquery className="text-3xl"/>,
//       description: "React Query is used to design template UI.",
//     },
//   ];

//   return (
//     <>
//       <div
//         id="skills"
//         className="flex flex-col items-center justify-center bg-black"
//         style={{
//           boxShadow:
//             "6px 6px -1px rgba(0,0,0,0.15), -6px -6px 10px rgba(255,255,255,0.7)",
//         }}
//       >
//         <h1 className="text-4xl font-bold justify-items-center text-white text-center py-4">
//           Skills
//         </h1>
//         <h3 className="text-stone-200 px-52 text-center mb-8">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
//           possimus. Nihil esse soluta sint minima nemo ratione consectetur,
//           delectus veniam?
//         </h3>
//         <div className="flex gap-2">
//           {skills.map((skill, index) => (
//             <HoverCard key={index}>
//               <HoverCardTrigger>
//                 <div className="text-white w-12 h-12 py-3 bg-purple-900 rounded-full flex items-center justify-center">
//                   {skill.icon}
//                 </div>
//               </HoverCardTrigger>
//               <HoverCardContent>{skill.description}</HoverCardContent>
//             </HoverCard>
//           ))}
//         </div>
//         <img src={SkillsImg} alt="skills" />
//       </div>
//     </>
//   );
// }

// export default Skills;

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

// import SkillsImg from "../assets/img/Skills.png";
import { TbBrandRedux } from "react-icons/tb";
import { SiExpress, SiMongodb, SiMysql, SiNextdotjs, SiReactquery } from "react-icons/si";
import { FaCss3Alt, FaFigma, FaJava, FaJs, FaNode, FaReact } from "react-icons/fa";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { FiFramer } from "react-icons/fi";

function Skills() {
  // Define array of skills with icon and description

  
  const skills = [
    {
      icon: <FaFigma className="text-3xl text-orange-600" />,
      description: "Figma is used to design template UI.",
    },
    {
      icon: <FaReact className="text-3xl text-blue-300" />,
      description: "React is used to design template UI.",
    },
    {
      icon: <FaNode className="text-3xl text-green-600" />,
      description: "Node.js is used to design template UI.",
    },
    {
      icon: <TbBrandRedux className="text-3xl text-purple-500" />,
      description: "Redux is used to design template UI.",
    },
    {
      icon: <FaJs className="text-3xl text-yellow-300" />,
      description: "JavaScript is used to design template UI.",
    },
    {
      icon: <FaCss3Alt className="text-3xl text-blue-300" />,
      description: "CSS3 is used to design template UI.",
    },
    {
      icon: <SiReactquery className="text-3xl text-red-600" />,
      description: "React Query is used to design template UI.",
    },
    {
      icon: <FaJava className="text-3xl text-orange-600" />,
      description: "React Query is used to design template UI.",
    },
    {
      icon: <SiNextdotjs className="text-3xl text-gray-500" />,
      description: "React Query is used to design template UI.",
    },
    {
      icon: <SiMongodb className="text-3xl text-green-500" />,
      description: "React Query is used to design template UI.",
    },
    {
      icon: <SiMysql className="text-3xl text-red-500" />,
      description: "React Query is used to design template UI.",
    },
    {
      icon: <SiExpress className="text-3xl text-slate-800" />,
      description: "React Query is used to design template UI.",
    },
    {
      icon: <FiFramer className="text-3xl text-purple-500" />,
      description: "React Query is used to design template UI.",
    },
  ];

  const halfSkills = Math.ceil(skills.length / 2);
  const firstHalfOfArraySkills = skills.slice(0, halfSkills);
  const secondHalfOfArraySkills = skills.slice(halfSkills);

  // Framer Motion variants for scaling effect
  // const cardVariants = {
  //   initial: {
  //     scale: 1.,
  //   },
  //   hover: {
  //     scale: 1.4,
  //   },
  // };
 const { scrollYProgress } = useViewportScroll();
 const scale = useTransform(scrollYProgress, [0, 1], [.1, 4]
 );


  const cardVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
      y: -24,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };


  return (
    <>
      <div
        id="skills"
        className="flex flex-col items-center justify-center bg-black"
        style={{
          boxShadow:
            "6px 6px -1px rgba(0,0,0,0.15), -6px -6px 10px rgba(255,255,255,0.7)",
        }}
      >
        <h1 className="text-4xl font-bold justify-items-center text-white text-center py-4">
          Skills
        </h1>
        <h3 className="text-stone-200 px-52 text-center mb-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
          possimus. Nihil esse soluta sint minima nemo ratione consectetur,
          delectus veniam?
        </h3>
        <div className="flex gap-2">
          {firstHalfOfArraySkills.map((skill, index) => (
            <motion.div
              style={{ scale }}
              key={index}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className="relative"
            >
              <HoverCard>
                <HoverCardTrigger>
                  <div className="text-white w-12 h-12 py-3 bg-purple-900 rounded-full flex items-center justify-center">
                    {skill.icon}
                  </div>
                </HoverCardTrigger>
                <HoverCardContent>{skill.description}</HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>
        <div className="flex gap-2">
          {secondHalfOfArraySkills.map((skill, index) => (
            <motion.div
              style={{ scale }}
              key={index}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className="relative"
            >
              <HoverCard>
                <HoverCardTrigger>
                  <div className="text-white w-12 h-12 py-3 bg-purple-900 rounded-full flex items-center justify-center">
                    {skill.icon}
                  </div>
                </HoverCardTrigger>
                <HoverCardContent>{skill.description}</HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>
        {/* <img src={SkillsImg} alt="skills" /> */}
      </div>
    </>
  );
}

export default Skills;

