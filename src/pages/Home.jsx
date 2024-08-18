import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-max bg-[#181818] p-8 mt-20 shadow-lg rounded-lg">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-base md:text-base lg:text-base text-[#b3b3b3] mb-8">
        This is the Home page where you can learn more about me.
      </p>
      <div className="bg-[#202020] p-8 md:p-12 lg:p-16 rounded-lg shadow-lg text-center max-w-xl">
        <button className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
}
