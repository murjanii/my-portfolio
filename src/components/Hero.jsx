import React from "react";
import Navbar from "./Navbar";

import vineet from "../assets/vineet.jpg";

/* Optional framer-motion imports (uncomment if you install framer-motion)
import { motion } from "framer-motion";
const M = motion;
*/

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[white] via-[white] to-[white] pointer-events-none"></div>

      {/* Navbar overlay */}
      <Navbar />

      {/* Main hero content (centers vertically, leaves nav space) */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 min-h-screen flex items-center pt-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left column - text */}
          <div className="py-6">
            <p className="text-sm text-slate-500 mb-4">— Fullstack Web Developer</p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Hi, I'm Vineet.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#4f46e5]">
                Fullstack Web Developer.{" "}
              </span>
            </h1>

            <p className="mt-6 text-slate-600 text-base max-w-xl">
              I build modern, responsive websites with great UX — clean visuals, fast performance, and delightful interactions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
  <a
    href="#contact"
    className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[grey] to-[#060606] text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
  >
    Get In Touch
  </a>

  <a
    href="#projects"
    className="inline-flex items-center px-5 py-2 rounded-full border border-slate-200 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-200"
  >
    View Projects
  </a>
</div>

{/* NEW: Social Icons Under Buttons */}
<div className="mt-6 flex items-center gap-4">
  {/* GitHub */}
  <a
    href="https://github.com/murjanii"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition flex items-center justify-center shadow-sm"
  >
    <img src="/github.svg" alt="GitHub" className="w-10h-10" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/vineet-murjani-bab7a4221"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition flex items-center justify-center shadow-sm"
  >
    <img src="/linkedin.svg" alt="LinkedIn" className="w-10 h-10" />
  </a>

             
            </div>
          </div>

          {/* Right column - image + floating card + badges */}
          <div className="relative flex justify-center md:justify-end">
            {/* soft panel behind image for depth */}
            <div className="absolute -inset-y-10 -left-6 md:-left-10 w-[55%] md:w-[80%] bg-gradient-to-tr from-[#eef2ff] to-white rounded-3xl transform -skew-x-3 md:skew-x-0 pointer-events-none"></div>

            <div className="relative z-10 w-[320px] sm:w-[380px] md:w-[460px] lg:w-[520px]">
              {/* image */}
             <div className="rounded-2xl overflow-hidden shadow-2xl group">
  <img 
    src={vineet} 
    alt="Vineet" 
   className="w-full h-96 object-cover transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl"


  />
              </div>

              {/* floating info card (overlaps bottom-right) */}
              <div className="absolute right-0 bottom-0 translate-y-8 translate-x-4 md:translate-x-10">
               
              </div>

            
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
