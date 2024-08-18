import React from "react";

const Skill = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#181818] px-4 mt-20">
      <div className="bg-[#202020] p-12 md:p-16 lg:p-20 rounded-lg shadow-lg text-center max-w-xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          My Skills
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-[#b3b3b3] mb-8">
          Explore the skills I have acquired over the years.
        </p>
        {/* Add more content here as needed */}
      </div>
    </div>
  );
};

export default Skill;
