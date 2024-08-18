import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      {/* Place the Navbar outside of Routes */}
      <Navbar />
      {/* Routes should only contain Route components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
