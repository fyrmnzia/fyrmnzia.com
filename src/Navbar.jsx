import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FaHome,
  FaGraduationCap,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSetActive = (index) => {
    setActiveIndex(index);
  };

  const navItems = [
    { icon: <FaHome />, path: "home" },
    { icon: <FaGraduationCap />, path: "education" },
    { icon: <FaTools />, path: "skill" },
    { icon: <FaProjectDiagram />, path: "project" },
    { icon: <FaEnvelope />, path: "contact" },
  ];

  return (
    <nav className="fixed top-5 left-5 right-5 flex justify-between items-center p-4 bg-[#202020] shadow-lg rounded-lg z-50 px-8 md:px-16 lg:px-32">
      <div className="flex justify-between w-full">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            smooth={true}
            duration={500}
            onClick={() => handleSetActive(index)}
            className={`relative px-4 py-2 text-lg transform transition-transform duration-200 cursor-pointer ${
              activeIndex === index
                ? "text-white scale-110"
                : "text-[#b3b3b3] hover:text-white hover:scale-110"
            }`}
          >
            {item.icon}
            <span
              className={`absolute left-0 right-0 bottom-[-6px] h-[2px] bg-white transform transition-transform duration-200 ${
                activeIndex === index ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
