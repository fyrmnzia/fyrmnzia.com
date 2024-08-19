import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  FaHome,
  FaGraduationCap,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { icon: <FaHome />, path: "home" },
    { icon: <FaGraduationCap />, path: "education" },
    { icon: <FaTools />, path: "skill" },
    { icon: <FaProjectDiagram />, path: "project" },
    { icon: <FaEnvelope />, path: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + 100; // Adjust the offset as needed

      sections.forEach((section, index) => {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-5 left-5 right-5 flex justify-between items-center p-4 border-[#181818] border-2 bg-[#161616] shadow-lg rounded-lg z-50 px-8 md:px-16 lg:px-32">
      <div className="flex justify-between w-full">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            smooth={true}
            duration={500}
            className={`relative px-4 py-2 text-lg transform transition-transform duration-200 cursor-pointer ${
              activeIndex === index
                ? "text-white scale-110"
                : "text-[#b3b3b3] hover:text-white hover:scale-110"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {item.icon}
            <span
              className={`absolute left-0 right-0 bottom-[-10px] h-[2px] bg-white transform transition-transform duration-200 ${
                activeIndex === index ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
}
