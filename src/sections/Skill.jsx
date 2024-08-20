import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaTools } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";

export default function Skill() {
  const skillItems = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      description: "HTML is a markup language for creating web pages",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS3",
      icon: <FaCss3 />,
      description: "CSS is used to style and layout web pages",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      description:
        "JavaScript is programming language for creating interactive web pages",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "React",
      icon: <FaReact />,
      description: "React is a library for bulding user interfaces",
      link: "https://react.dev/",
    },
    {
      name: "Tailwindcss",
      icon: <RiTailwindCssFill />,
      description:
        "Tailwindcss is a library for styling and layouting web pages",
      link: "https://tailwindcss.com/",
    },
    {
      name: "MySQL",
      icon: <TbBrandMysql />,
      description: "MySQL is used to store, process, and manage data web pages",
      link: "https://www.mysql.com/",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-max rounded-xl bg-[#181818] border-[#202020] border-2 px-4 pt-14 md:pt-24">
      <div className="flex gap-2 mb-7 mt-4">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          <FaTools />
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Skill
        </h1>
      </div>

      <p>These are things I learned</p>

      <div className="bg-[#202020] border-2 border-[#222222] p-8 md:p-12 lg:p-16 rounded-lg shadow-lg text-center max-w-4xl flex flex-col md:flex-row items-center m-8 gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillItems.map((skillItems, index) => (
            <a
              href={skillItems.link}
              key={index}
              className="bg-[#222222] border-2 border-[#242424] p-2 md:p-6 lg:p-10 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#242424]"
            >
              <div
                className={`h-16 w-16 text-6xl mb-4 flex items-center justify-center text-white`}
              >
                {skillItems.icon}
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 text-white">
                {skillItems.name}
              </h3>
              <p className="text-center">{skillItems.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
