import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { data } from "../data/data.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Work = () => {
  const [showIntro, setShowIntro] = useState(-1);

  const handleMouseEnter = (index) => {
    setShowIntro(index);
  };

  const handleMouseLeave = () => {
    setShowIntro(-1);
  };

  return (
    <div
      id="work"
      className="w-full md:h-screen bg-[#0a192f] md:mt-8 text-gray-300"
    >
      <div className="max-w-[1200px] mx-auto p-4 h-full flex flex-col justify-center">
        <div className="py-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#3D9239]">
            Projects that I've worked on
          </p>
        </div>

        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          stopOnHover={false}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="container pb-12 mx-auto flex justify-center items-center relative content-div shadow-lg rounded-md group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {showIntro === index && (
                <div className="absolute w-full h-20 translate-y-full bg-black opacity-80 flex items-center justify-center">
                  <div className="text-white text-center mx-4">
                    {item.intro}
                  </div>
                </div>
              )}
              <div className="opacity-100">
                <div className="h-80 md:h-96 pb-8">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full rounded-xl h-full"
                  />
                </div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <button className="px-4 py-3 m-2 text-lg font-bold text-gray-700 bg-white rounded-lg">
                      Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank" rel="noreferrer">
                    <button className="px-4 py-3 m-2 text-lg font-bold text-gray-700 bg-white rounded-lg">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Work;
