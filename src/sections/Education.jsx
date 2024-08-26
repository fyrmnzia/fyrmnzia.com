import React from "react";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <div className="flex flex-col items-center justify-center h-max rounded-xl bg-[#181818] border-[#202020] border-2 pt-6 md:pt-16">
      <div className="flex gap-2 mb-7">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          <FaGraduationCap />
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Education
        </h1>
      </div>

      <div className="bg-[#202020] border-[#222222] border-2 p-8 md:p-12 lg:p-16 rounded-lg shadow-lg text-center max-w-4xl flex flex-col items-center m-8 gap-8">
        <div className="flex-1 text-center md:text-justify">
          <h1 className="font-bold text-white mb-4">self-taught</h1>
          <p>
            Since I graduated from high school, I have studied web development
            self-taught by watching learning videos, such as HTML, CSS, and even
            JavaScript.
          </p>
        </div>
        <div className="flex-1 text-center md:text-justify">
          <h1 className="font-bold text-white mb-4">profile</h1>
          <p>
            I am a fresh graduate who has ambitions in the field of Frontend
            Developer and Administrator. I am experienced with expertise in
            modern web technologies such as HTML5, CSS3, JavaScript, and
            frameworks such as React. Experienced in developing responsive web
            application, optimizing performance, and implementing interactive
            designs. I have strong problem-solving skills and is commited to
            creating an exceptional user experience. In addition, I am also
            experiences in using Microsoft Word and Microsoft Excel for
            administrative work, including report generation and data analysis.
          </p>
        </div>
      </div>
    </div>
  );
}
