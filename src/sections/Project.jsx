import { Carousel } from "@material-tailwind/react";
import React from "react";
import { FaProjectDiagram } from "react-icons/fa";

export default function Project() {
  const projectItems = [
    {
      name: "fytodo",
      img: "/images/fytodo.png",
      link: "https://fytodo.vercel.app/",
      alt: "fytodo",
    },
    {
      name: "queenycil",
      img: "/images/queenycil.png",
      link: "https://queenycil.vercel.app/",
      alt: "queenycil",
    },
    {
      name: "fycalc",
      img: "/images/fycalc.png",
      link: "https://fycalc.vercel.app/",
      alt: "fycalc",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-max rounded-xl bg-[#181818] border-2 border-[#202020] pt-14 md:pt-24">
      <div className="flex gap-2 mb-7">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          <FaProjectDiagram />
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Projects
        </h1>
      </div>
      <p className="text-center md:text-justify">
        Besides this personal website, these are project I have created
      </p>
      <div className="bg-[#202020] border-2 border-[#222222] p-8 md:p-12 lg:p-16 rounded-lg shadow-lg text-center max-w-4xl flex flex-col md:flex-row items-center m-8 gap-8">
        <Carousel
          loop={true}
          transition={{ duration: 1 }}
          autoplay={true}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 z-40">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          {projectItems.map((projectItems, index) => (
            <a
              href={projectItems.link}
              key={index}
              className="object-cover bg-[#222222] border-2 border-[#242424] p-1 md:p-2 lg:p-3 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:rounded-lg hover:bg-[#242424] mx-6"
            >
              <img
                src={projectItems.img}
                alt={projectItems.alt}
                className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg mx-auto"
              />
              <h3 className="text-base md:text-lg lg:text-xl font-semibold my-4 text-white">
                {projectItems.name}
              </h3>
            </a>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
