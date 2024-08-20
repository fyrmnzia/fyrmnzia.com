import React from "react";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen rounded-xl bg-[#181818] border-[#202020] border-2 px-4 pt-16">
      <div className="flex gap-2 mb-7">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          <FaGraduationCap />
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Education
        </h1>
      </div>

      <div className="bg-[#202020] border-[#222222] border-2 p-8 md:p-12 lg:p-16 rounded-lg shadow-lg text-center max-w-4xl flex flex-col md:flex-row items-center m-8 gap-8">
        <div className="flex-1 text-center md:text-justify">
          <h1 className="font-bold text-white mb-4">self-taught</h1>
          <p>
            Since I graduated from high school, I have studied web development
            self-taught by watching learning videos, such as HTML, CSS, and even
            JavaScript.
          </p>
        </div>
      </div>
    </div>
  );
}
