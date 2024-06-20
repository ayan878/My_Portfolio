import GreaterThan from "../assets/img/arrow2.svg";
import LessThan from "../assets/img/arrow1.svg";
import nintyFive from "../assets/img/meter1.svg";
import ImageSlider from "./ImageSlider";
import SkillsImg from "../assets/img/Skills.png"
function Skills() {
  return (
    <div
      // className=" bg-black bg-opacity-80 mx-28 rounded-3xl py-4 "
      className="flex flex-col items-center justify-center"
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
  {/* <ImageSlider/> */}
      <img src={SkillsImg} alt="skills"/>
    </div>
  );
}

export default Skills;
