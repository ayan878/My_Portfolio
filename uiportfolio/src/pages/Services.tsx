// import { AnimatedTooltip } from "@/components/ui/animated-toolkit";
// import React from "react";
  import ShuffleCard from "@/components/ShuffleCards";
import {
    FaFigma,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaJs,
    FaHtml5,
    FaCss3Alt,
  } from "react-icons/fa";
const Services = () => {


  // Define the items with icons and descriptions
  const items = [
    {
      id: 1,
      name: "Figma",
      designation: "UI/UX Design",
      image: "/path/to/image1.jpg",
      icon: <FaFigma />,
      description: "This is Figma",
    },
    {
      id: 2,
      name: "React",
      designation: "Front-End Framework",
      image: "/path/to/image2.jpg",
      icon: <FaReact />,
      description: "This is React",
    },
    {
      id: 3,
      name: "Node.js",
      designation: "Back-End Framework",
      image: "/path/to/image3.jpg",
      icon: <FaNodeJs />,
      description: "This is Node.js",
    },
    {
      id: 4,
      name: "GitHub",
      designation: "Version Control",
      image: "/path/to/image4.jpg",
      icon: <FaGithub />,
      description: "This is GitHub",
    },
    {
      id: 5,
      name: "JavaScript",
      designation: "Programming Language",
      image: "/path/to/image5.jpg",
      icon: <FaJs />,
      description: "This is JavaScript",
    },
    {
      id: 6,
      name: "HTML5",
      designation: "Markup Language",
      image: "/path/to/image6.jpg",
      icon: <FaHtml5 />,
      description: "This is HTML5",
    },
    {
      id: 7,
      name: "CSS3",
      designation: "Style Sheet Language",
      image: "/path/to/image7.jpg",
      icon: <FaCss3Alt />,
      description: "This is CSS3",
    },
  ];
  return (
    <section
      id="services"
      className="section"
      style={{ width: "100%", height: "100vh", backgroundColor: "red" }}
    >
      <h2>Services Section</h2>
      <p>Welcome to the Home section!</p>
      {/* <AnimatedTooltip items={items}/> */}
      <ShuffleCard/>
    </section>
  );
};

export default Services;
