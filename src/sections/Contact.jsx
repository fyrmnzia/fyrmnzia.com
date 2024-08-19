import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#181818] px-4 pt-20">
      <div className="bg-[#202020] p-12 md:p-16 lg:p-20 rounded-lg shadow-lg text-center max-w-xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-[#b3b3b3] mb-8">
          This is the Home page where you can learn more about me.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Contact;
