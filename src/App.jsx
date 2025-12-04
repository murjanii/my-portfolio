import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
     
      <Hero />
      <About/>
      <Skills/>
      <main className="w-full">
      =
        <Projects />
        <Contact />
       
      </main>
      <Footer />
    </div>
  );
}
