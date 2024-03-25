import React, { useState } from "react";
import LessThan from "../assets/img/arrow1.svg";
import GreaterThan from "../assets/img/arrow2.svg";
import nintyFive from "../assets/img/meter1.svg";
import eighty from "../assets/img/meter2.svg";
import ninty from "../assets/img/meter3.svg";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { imageUrl: nintyFive, title: "JavaScript" },
    { imageUrl: eighty, title: "React" },
    { imageUrl: nintyFive, title: "CSS" },
    { imageUrl: nintyFive, title: "Java" },
    { imageUrl: ninty, title: "HTML" },
    { imageUrl: nintyFive, title: "Python" },
    { imageUrl: eighty, title: "MySql" },
    { imageUrl: nintyFive, title: "Redux" },
    { imageUrl: ninty, title: "MongoDB" },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 3
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - 3 ? 0 : prevIndex + 3
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex justify-center gap-12 mb-4">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <div key={index} className="relative">
            <img src={image.imageUrl} alt={image.title} className="w-36" />
            <h3 className="text-white text-3xl font-bold absolute top-[150px] left-0 right-0 text-center">
              {image.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <button onClick={handlePrevious}>
          <img
            src={LessThan}
            alt="Previous"
            className="w-10 h-10 p-2 relative bottom-[150px] right-[430px] border rounded-full bg-purple-800"
          />
        </button>
        <div className="flex gap-2 mt-10 justify-center">
          {[...Array(Math.ceil(images.length / 3))].map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full bg-white cursor-pointer ${
                currentIndex >= index * 3 && currentIndex < (index + 1) * 3
                  ? "bg-purple-800"
                  : ""
              }`}
              onClick={() => setCurrentIndex(index * 3)}
            ></div>
          ))}
        </div>
        <button onClick={handleNext}>
          <img
            src={GreaterThan}
            alt="Next"
            className="w-10 h-10 p-2 relative bottom-[150px] left-[430px] border rounded-full bg-purple-800"
          />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
