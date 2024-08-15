import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaGraduationCap,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSetActive = (index) => {
    setActiveIndex(index);
  };

  const navItems = [
    { icon: <FaHome />, path: "/" },
    { icon: <FaGraduationCap />, path: "/education" },
    { icon: <FaTools />, path: "/skill" },
    { icon: <FaProjectDiagram />, path: "/project" },
    { icon: <FaEnvelope />, path: "/contact" },
  ];

  return (
    <div className="fixed top-8 w-max px-8 md:px-80 py-6 md:py-10 mb-2 md:mb-4 bg-[#212121] rounded-xl border-[#222222] shadow-black shadow-md">
      <nav className="flex items-center gap-10 md:gap-12 mx-auto">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={() => handleSetActive(index)}
            className={`mx-auto flex gap-10 md:gap-12 text-lg transform transition-transform duration-200 ${
              activeIndex === index
                ? "text-white scale-110"
                : "hover:text-white hover:scale-110 hover:underline hover:underline-offset-4"
            }`}
          >
            {item.icon}
            <span
              className={`absolute left-0 right-0 bottom-[-4px] h-[2px] bg-white transform transition-transform duration-200 ${
                activeIndex === index ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </Link>
        ))}
      </nav>
    </div>
  );
}
