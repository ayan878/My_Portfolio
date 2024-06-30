import project1 from "../assets/project-img1.png";
import project2 from "../assets/project-img2.png";
import project3 from "../assets/project-img3.png";

import { motion } from "framer-motion";

const projects = [project1, project2, project3, project1];

function Projects() {
  const cardVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div id="projects" className="py-4   ">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-paytone text-center text-indigo-600 uppercase font-outline-2 mb-6 font-extrabold">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center   ">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="m-4 px-8 md:px-4 grid md:grid-col-2"
            whileHover="hover"
            variants={cardVariants}
            initial="initial"
          >
            <img
              src={project}
              alt={`Project ${index + 1}`}
              className="max-w-full h-auto rounded-3xl shadow-[6px_8px_0px_black] border-2 border-black  "
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
