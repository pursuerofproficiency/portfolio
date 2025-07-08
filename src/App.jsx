import React from "react";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
    </div>
  );
}
