import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const contactItems = [
    { name: "GitHub", icon: <FaGithub />, link: "github.com/fyrmnzia" },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/rifqi-firmansyah-1686b3292",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-max rounded-xl bg-[#181818] border-2 border-[#202020] pt-14 md:pt-24">
      <div className="flex gap-2 mb-7">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          <FaEnvelope />
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Contact
        </h1>
      </div>
      <p>Lets get connected on these platform!</p>
      <div className="bg-[#202020] border-2 border-[#222222] p-8 md:p-12 lg:p-16 rounded-lg shadow-lg text-center max-w-4xl flex flex-col md:flex-row items-center m-8 gap-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-8">
          {contactItems.map((contactItems, index) => (
            <a
              href={contactItems.link}
              key={index}
              className="bg-[#222222] border-2 border-[#242424] p-2 md:p-6 lg:p-10 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#242424]"
            >
              <div
                className={`h-16 w-16 text-6xl mb-4 flex items-center justify-center text-white`}
              >
                {contactItems.icon}
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 text-white">
                {contactItems.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
