
// import Image from "next/image";
import { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";



export const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };
  if(!items.icon){
    console.log("not found")
  }

  return (
    <>
      {items.map((item) => (
        <div
          className="-mr-4 relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-white relative z-30 text-base">
                  {item.name}
                </div>
                <div className="text-white text-xs">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={items.icon}
            // alt={item.name}
            className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
          />
        </div>
      ))}
    </>
  );
};


// // import Image from "next/image";
// import React, { useState } from "react";
// import {
//   motion,
//   useTransform,
//   AnimatePresence,
//   useMotionValue,
//   useSpring,
// } from "framer-motion";
// import {
//   FaFigma,
//   FaReact,
//   FaNodeJs,
//   FaGithub,
//   FaJs,
//   FaHtml5,
//   FaCss3Alt,
// } from "react-icons/fa";

// // Define the items with icons and descriptions
// const items = [
//   {
//     id: 1,
//     name: "Figma",
//     designation: "UI/UX Design",
//     image: "/path/to/image1.jpg",
//     icon: <FaFigma />,
//     description: "This is Figma",
//   },
//   {
//     id: 2,
//     name: "React",
//     designation: "Front-End Framework",
//     image: "/path/to/image2.jpg",
//     icon: <FaReact />,
//     description: "This is React",
//   },
//   {
//     id: 3,
//     name: "Node.js",
//     designation: "Back-End Framework",
//     image: "/path/to/image3.jpg",
//     icon: <FaNodeJs />,
//     description: "This is Node.js",
//   },
//   {
//     id: 4,
//     name: "GitHub",
//     designation: "Version Control",
//     image: "/path/to/image4.jpg",
//     icon: <FaGithub />,
//     description: "This is GitHub",
//   },
//   {
//     id: 5,
//     name: "JavaScript",
//     designation: "Programming Language",
//     image: "/path/to/image5.jpg",
//     icon: <FaJs />,
//     description: "This is JavaScript",
//   },
//   {
//     id: 6,
//     name: "HTML5",
//     designation: "Markup Language",
//     image: "/path/to/image6.jpg",
//     icon: <FaHtml5 />,
//     description: "This is HTML5",
//   },
//   {
//     id: 7,
//     name: "CSS3",
//     designation: "Style Sheet Language",
//     image: "/path/to/image7.jpg",
//     icon: <FaCss3Alt />,
//     description: "This is CSS3",
//   },
// ];

// export const AnimatedTooltip = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const springConfig = { stiffness: 100, damping: 5 };
//   const x = useMotionValue(0); // going to set this value on mouse move
//   // rotate the tooltip
//   const rotate = useSpring(
//     useTransform(x, [-100, 100], [-45, 45]),
//     springConfig
//   );
//   // translate the tooltip
//   const translateX = useSpring(
//     useTransform(x, [-100, 100], [-50, 50]),
//     springConfig
//   );
//   const handleMouseMove = (event) => {
//     const halfWidth = event.target.offsetWidth / 2;
//     x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
//   };

//   return (
//     <>
//       {items.map((item) => (
//         <div
//           className="-mr-4 relative group"
//           key={item.name}
//           onMouseEnter={() => setHoveredIndex(item.id)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         >
//           <AnimatePresence mode="popLayout">
//             {hoveredIndex === item.id && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20, scale: 0.6 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   scale: 1,
//                   transition: {
//                     type: "spring",
//                     stiffness: 260,
//                     damping: 10,
//                   },
//                 }}
//                 exit={{ opacity: 0, y: 20, scale: 0.6 }}
//                 style={{
//                   translateX: translateX,
//                   rotate: rotate,
//                   whiteSpace: "nowrap",
//                 }}
//                 className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
//               >
//                 <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
//                 <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
//                 <div className="font-bold text-white relative z-30 text-base">
//                   {item.name}
//                 </div>
//                 <div className="text-white text-xs">{item.designation}</div>
//                 <div className="text-white text-xs mt-2">
//                   {item.icon} {item.description}
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//           {/* <Image
//             onMouseMove={handleMouseMove}
//             height={100}
//             width={100}
//             src={item.image}
//             alt={item.name}
//             className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
//           /> */}
//         </div>
//       ))}
//     </>
//   );
// };

