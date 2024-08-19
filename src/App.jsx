import React from "react";
import Navbar from "./Navbar";
import Home from "./sections/Home";
import Education from "./sections/Education";
import Skill from "./sections/Skill";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import "@fontsource/poppins"; // untuk font normal
import "@fontsource/poppins/600.css"; // untuk font bold

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <section id="home" className="my-20">
          <Home />
        </section>
        <section id="education" className="my-20">
          <Education />
        </section>
        <section id="skill" className="my-20">
          <Skill />
        </section>
        <section id="project" className="my-20">
          <Project />
        </section>
        <section id="contact" className="my-20">
          <Contact />
        </section>
      </main>
      <footer className="text-center">
        <p>&copy; 2024 fyrmnzia.com</p>
      </footer>
    </div>
  );
};

export default App;
