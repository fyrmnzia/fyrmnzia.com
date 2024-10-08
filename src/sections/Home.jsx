import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center h-max rounded-xl bg-[#181818] border-[#202020] border-2 pt-5 md:pt-20">
      <div className="bg-[#202020] border-[#222222] border-2 p-2 md:p-12 lg:p-16 rounded-lg shadow-lg text-center max-w-4xl flex flex-col md:flex-row items-center m-8 gap-8">
        {/* Title and Description */}
        <div className="flex-1 text-center md:text-justify">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Rifqi Firmansyah
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[#b3b3b3]">
            Hi!, Im from Sumedang, Indonesia and Im a high school graduate in
            2023, I am a Frontend Developer and also Administrator.
          </p>
        </div>

        {/* Photo */}
        <a href="/images/profile.png" className="flex-1">
          <img
            src="/images/profile.png"
            alt="Rifqi Firmansyah"
            className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg mx-auto grayscale"
          />
        </a>
      </div>
    </div>
  );
}
