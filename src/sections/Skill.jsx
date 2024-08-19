import React from "react";
import { FaTools } from "react-icons/fa";

export default function Skill() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen rounded-xl bg-[#181818] px-4 pt-24">
      <div className="flex gap-2 mb-7">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          <FaTools />
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Skill
        </h1>
      </div>

      <p>These are things I learned</p>

      <div className="bg-[#202020] p-8 md:p-12 lg:p-16 rounded-lg shadow-lg text-center max-w-4xl flex flex-col md:flex-row items-center m-8 gap-8">
        <div className="flex-1 text-justify">
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
