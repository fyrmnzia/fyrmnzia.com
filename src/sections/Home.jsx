import React from "react";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center h-max rounded-xl bg-[#181818] border-[#202020] border-2 px-1 md:px-4 pt-5 md:pt-20">
      <div className="flex gap-2 p-2 md:p-6 lg:p-10">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          <FaHome />
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Home
        </h1>
      </div>
      <div className="bg-[#202020] border-[#222222] border-2 p-2 md:p-12 lg:p-16 rounded-lg shadow-lg text-center max-w-4xl flex flex-col md:flex-row items-center m-8 gap-8">
        {/* Title and Description */}
        <div className="flex-1 text-center md:text-justify">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Rifqi Firmansyah
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[#b3b3b3]">
            Hi!, Im from Sumedang, Indonesia and Im a high school graduate in
            2023, I studied web development self-taught.
          </p>
        </div>

        {/* Photo */}
        <div className="flex-1">
          <img
            src="/public/profile.jpg"
            alt="Rifqi Firmansyah"
            className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg mx-auto grayscale"
          />
        </div>
      </div>
    </div>
  );
}
