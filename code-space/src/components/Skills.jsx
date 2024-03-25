import GreaterThan from "../assets/img/arrow2.svg";
import LessThan from "../assets/img/arrow1.svg";
import nintyFive from "../assets/img/meter1.svg";
import ImageSlider from "./ImageSlider";

function Skills() {
  return (
    <div
      className=" bg-black bg-opacity-80 mx-28 rounded-3xl py-4 "
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
  <ImageSlider/>
      {/* <div className="flex justify-between">
        <button>
          <img
            src={LessThan}
            alt="lessThan"
            className="w-10 h-10 p-2 relative top-10 right-4 border rounded-full bg-purple-800"
          />
        </button>
        <button>
          <img
            src={GreaterThan}
            alt="GreaterThan"
            className="w-10 h-10 p-2 relative top-10 left-4 border rounded-full bg-purple-800"
          />
        </button>
      </div>
      <div className="flex gap-16 mx-8 p-4 justify-center">
        <div className="justify-center">
          <img src={nintyFive} alt="95%Img" className="w-36" />
          <h3 className="text-white text-3xl font-bold">JavaScript</h3>
        </div>
        <div>
          <img src={nintyFive} alt="95%Img" className="w-36" />
          <h3 className="text-white text-3xl font-bold">JavaScript</h3>
        </div>
        <div>
          <img src={nintyFive} alt="95%Img" className="w-36" />
          <h3 className="text-white text-3xl font-bold">JavaScript</h3>
        </div>
      </div> */}
    </div>
  );
}

export default Skills;
