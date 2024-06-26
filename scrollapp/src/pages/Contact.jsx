import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { FiFramer } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import { FaCss3Alt, FaFigma, FaJava, FaJs, FaNode, FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiExpress, SiMongodb, SiMysql, SiNextdotjs, SiReactquery } from "react-icons/si";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import Border from "@/components/ui/Border";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Contact = () => {

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
  const color = useMotionValue(COLORS_TOP[0]);

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 4]);
  const scaleSection = useTransform(scrollYProgress, [0, 1], [0.1, 4]);

  const cardVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.5,
      y: -24,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  // const border = useMotionTemplate`1px solid ${color}`;
  // const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Decrease your SaaS churn by over 90%
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et,
          distinctio eum impedit nihil ipsum modi.
        </p>
        
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
        {/* <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          
        
        </motion.button> */}
        <Border
          title="Skills"
          className="text-3xl font-bold rounded-full tracking-wider px-24 mt-6"
        />
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div> 
    </motion.section>
  );
};
