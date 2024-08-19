import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen rounded-md bg-[#181818] px-4 pt-5">
      <div className="flex gap-2">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          <FaGraduationCap />
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Education
        </h1>
      </div>
      <div className="bg-[#202020] p-8 md:p-12 lg:p-16 rounded-lg shadow-lg text-center max-w-4xl flex flex-col md:flex-row items-center m-8 gap-8">
        <div className="flex-1 text-left">
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
};

export default Education;
