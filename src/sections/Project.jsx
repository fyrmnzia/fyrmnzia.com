import React from "react";
import { FaProjectDiagram } from "react-icons/fa";

export default function Project() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen rounded-xl bg-[#181818] border-2 border-[#202020] px-4 pt-24">
      <div className="flex gap-2 mb-14">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          <FaProjectDiagram />
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Projects
        </h1>
      </div>
      <p>Besides this personal website, these are project I have created</p>
      <div className="bg-[#202020] border-2 border-[#222222] p-8 md:p-12 lg:p-16 rounded-lg shadow-lg text-center max-w-4xl flex flex-col md:flex-row items-center m-8 gap-8">
        <div className="bg-[#222222] border-2 border-[#242424] p-2 md:p-6 lg:p-10 rounded-lg shadow-lg text-center max-w-4xl items-center gap-8">
          <h1 className="text-base md:text-lg lg:text-xl font-semibold mb-2 text-white">
            Coming soon!
          </h1>
        </div>
      </div>
    </div>
  );
}
