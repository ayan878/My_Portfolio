// import Button from "@/components/ui/Button";
// import myPic from "../assets/img/ayan.jpg"
// import { useAnimatedBackgroundColor } from "@/components/utils/backgroundUtils";

// const AboutMe = () => {
//   const backgroundColor=useAnimatedBackgroundColor();
//   return (
//     <div className="radial-gradient(125% 125% at 50% 0%, #020617 50%,to-bg-purple-700 lg:flex lg:items-center p-6 md:p-12 lg:justify-between">
//       <div className="relative lg:flex lg:flex-row lg:items-center">
//         <div
//           className={` relative h-96 w-72 lg:w-2/5 bg- rounded-xl`}
//           style={{
//             backgroundColor: backgroundColor,
//             transformStyle: "preserve-3d",
//             transform: "rotateY(25deg)",
//           }}
//         >
//           <div
//             style={{
//               transform: "translateZ(16px) translateY(-8px)",
//               transformStyle: "preserve-3d",
//             }}
//             className="absolute inset-2 grid  rounded-xl shadow-lg  border-2 border-black"
//           >
//             {/* <img
//               src={myPic}
//               alt="Ayan Raza"
//               className="top-4 rounded-tl-[96px] rounded-br-[96px] w-3/4 h-3/4 mx-auto lg:mx-0 lg:mr-6"
//             /> */}
//             <img
//               src={myPic}
//               alt="Ayan Raza"
//               className="absolute rounded-xl w-full h-full mx-auto lg:mx-0 lg:mr-6"
//             />
//           </div>
//         </div>
//         <div className="lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0">
//           <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
//           <p className="text-gray-600 mt-4">
//             Experience slick whiteboard usability whiteboard users, clean users
//             goal. Design thinking journey map component informative map risk
//             agile slick interaction. Aesthetics persona journey map research
//             agile aesthetics, agile delight interaction service design.
//           </p>
//           <Button title="www.codeSpace.com" className="rounded-full" />
//           <p className="mt-4 text-gray-600">Aayan</p>
//         </div>
//       </div>
//       <div className="mt-6 lg:mt-0 lg:flex lg:flex-row lg:space-x-6 text-center lg:text-left">
//         <div className="lg:w-1/3">
//           <h3 className="text-xl font-bold text-gray-800">20+</h3>
//           <p className="text-gray-600">Years of Experience</p>
//         </div>
//         <div className="lg:w-1/3 mt-4 lg:mt-0">
//           <h3 className="text-xl font-bold text-gray-800">15+</h3>
//           <p className="text-gray-600">Award Winning</p>
//         </div>
//         <div className="lg:w-1/3 mt-4 lg:mt-0">
//           <h3 className="text-xl font-bold text-gray-800">100+</h3>
//           <p className="text-gray-600">Projects Done</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;

import Button from "@/components/ui/Button";
import myPic from "../assets/img/ayan.jpg";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useAnimatedBackgroundColor } from "@/components/utils/backgroundUtils";


const AboutMe = () => {
 
const {scrollYProgress}=useViewportScroll();
const rotate=useTransform(scrollYProgress,[0,1],[0,16]);
 const {backgroundColor}=useAnimatedBackgroundColor();
  return (
    <div className="bg-white lg:flex lg:items-center p-6 md:p-12 lg:justify-between">
      <div className="relative lg:flex lg:flex-row lg:items-center">
        <motion.div
          className="relative h-96 w-72 lg:w-5/5 rounded-xl border-2 border-black"
          style={{
            rotate,
            backgroundColor,
            transformStyle: "preserve-3d",
            transform: "rotateY(25deg)",
          }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 0 }}
          whileHover={{ rotate: 0 }}
        >
          <motion.div
            style={{
              rotate,
              backgroundColor: backgroundColor,
              transformStyle: "preserve-3d",
              // transform: "translateZ(24px) translateY(8px)",
            }}
            initial={{ rotate: 0 }}
            animate={{ rotate }}
            // whileHover={{ rotate: 8 }}
            className="absolute inset-0 grid rounded-xl shadow-lg border-2 border-black"
          >
            <motion.div
              style={{
                rotate,
                backgroundColor: backgroundColor,
                transformStyle: "preserve-3d",
              }}
              initial={{ rotate: 0 }}
              animate={{ rotate }}
              // whileHover={{ rotate: 8 }}
              className="absolute inset-2 grid rounded-xl shadow-lg border-2 border-black"
            >
              <img
                src={myPic}
                alt="Ayan Raza"
                className="absolute rounded-xl w-full h-full mx-auto lg:mx-0"
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0">
          <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
          <p className="text-gray-600 mt-4">
            Experience slick whiteboard usability whiteboard users, clean users
            goal. Design thinking journey map component informative map risk
            agile slick interaction. Aesthetics persona journey map research
            agile aesthetics, agile delight interaction service design.
          </p>
          <Button title="www.codeSpace.com" className="rounded-full" />
          <p className="mt-4 text-gray-600">Aayan</p>
        </div>
      </div>
      <div className="mt-6 lg:mt-0 lg:flex lg:flex-row lg:space-x-6 text-center lg:text-left">
        <div className="lg:w-1/3">
          <h3 className="text-xl font-bold text-gray-800">20+</h3>
          <p className="text-gray-600">Years of Experience</p>
        </div>
        <div className="lg:w-1/3 mt-4 lg:mt-0">
          <h3 className="text-xl font-bold text-gray-800">15+</h3>
          <p className="text-gray-600">Award Winning</p>
        </div>
        <div className="lg:w-1/3 mt-4 lg:mt-0">
          <h3 className="text-xl font-bold text-gray-800">100+</h3>
          <p className="text-gray-600">Projects Done</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
