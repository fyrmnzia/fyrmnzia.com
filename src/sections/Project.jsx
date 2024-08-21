import React from "react";
import { FaProjectDiagram } from "react-icons/fa";

export default function Project() {
  const projectItems = [
    {
      name: "fyrmnzia-todo-app",
      img: "/images/todoapp.png",
      link: "https://fyrmnzia-todo-app.vercel.app/",
    },
    {
      name: "queenycil",
      img: "/images/queenycil.png",
      link: "https://queenycil.vercel.app/",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projectItems.map((projectItems, index) => (
            <a
              href={projectItems.link}
              key={index}
              className="bg-[#222222] border-2 border-[#242424] p-1 md:p-2 lg:p-3 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#242424]"
            >
              <img
                src={projectItems.img}
                alt="project"
                className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg mx-auto"
              />
              <h3 className="text-base md:text-lg lg:text-xl font-semibold my-4 text-white">
                {projectItems.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
