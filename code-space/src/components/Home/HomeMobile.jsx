// src/components/mobile/HomeMobile.js
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import RightArrow from "@assets/img/right-arrow.svg";
import Astronaut from "@assets/img/header-img.svg";
import styles from "./HomeMobile.module.css";

function HomeMobile() {
  return (
    <div className={styles.container}>
      <h3 className={styles.welcome}>Welcome to my CodeSpace</h3>
      <TypeAnimation
        className={styles.typing}
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
      <p className={styles.description}>
        I'm a full stack developer (React.js & Node.js) with a focus on creating
        (and occasionally designing) exceptional digital experiences that are
        fast, accessible, visually appealing, and responsive. Even though I have
        been creating web applications for over 7 years, I still love it as if
        it was something new.
      </p>
      <Link className={styles.connect}>
        <span>Let's Connect</span>
        <img src={RightArrow} alt="Right Arrow" />
      </Link>
      <div>
        <motion.img
          className={styles.image}
          src={Astronaut}
          alt="My Animated Image"
          animate={{ opacity: 1, y: [0, -50, 0], scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut", yoyo: Infinity }}
          initial={{ opacity: 0, y: 0, scale: 0.5 }}
        />
      </div>
    </div>
  );
}

export default HomeMobile;
