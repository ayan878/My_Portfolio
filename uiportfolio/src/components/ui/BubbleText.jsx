import styles from "./Bubble.module.css";
const Example = () => {
  return (
    <div className="grid h-screen place-content-center bg-black">
      <BubbleText />
    </div>
  );
};

export const BubbleText = ({className}) => {
  const text = `I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (in case you've got an empty canvas layin' around 🎨). Let's connect!`;

  //   const hoverTextStyle = {
  //     transition: "transform 0.3s ease-in-out, color 0.3s ease-in-out",
  //   };

  //   const hoverTextHoverStyle = {
  //     transform: "scale(1.2)",
  //     color: "#ff4500",
  //   };


  return (
    <h2 className={`text-left text-2xl font-thin text-indigo-300 ${className}`}>
      {text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Example;
