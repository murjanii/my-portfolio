import React from "react";
import vineet from "../assets/vineet.jpg";
import { motion } from "framer-motion";
const M = motion;



export default function About() {
  return (
    
    <section id="About" className="relative py-24 bg-white overflow-hidden">
      {/* subtle pattern / accent - a faint textured background circle */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-28 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#fff6fb] to-transparent opacity-60 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* LEFT: portrait + decorative rings */}
          <div className="flex items-center justify-center md:justify-start">
            <div className="relative w-80 h-80">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <circle cx="130" cy="130" r="120" stroke="#EEF2FF" strokeWidth="10" opacity="0.9" />
                  <path d="M10 130 A120 120 0 0 1 250 130" stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" transform="rotate(-20 130 130)" opacity="0.9"/>
                </svg>
              </div>

              {/* Colored accent small shapes */}
              <div className="absolute -right-6 -bottom-4">
                <div className="w-8 h-8 rounded-full bg-[#FFD580] shadow-md" />
              </div>
              <div className="absolute -left-6 -top-4">
                <div className="w-6 h-6 rounded-full bg-[#C7B2FF] shadow-sm" />
              </div>

              {/* Circular photo */}
              <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl mx-auto">
                <img src={vineet} alt="Vineet Murjani" className="w-full h-full object-cover" />
                {/* small inner ring */}
                <div className="pointer-events-none absolute inset-0 rounded-full border-4 border-white/30" />
              </div>

              {/* small floating badge */}
              <div className="absolute -top-3 right-6">
                
              </div>
            </div>
          </div>

          {/* RIGHT: content, cards, CTA */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm text-indigo-500 font-semibold">ABOUT ME</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
                Designing solutions, not just visuals
              </h2>
              <p className="mt-4 text-slate-600 max-w-2xl">
                I’m a Fullstack Web developer who focuses on building clear, maintainable interfaces using React and Tailwind CSS.
                I enjoy solving real problems with simple, elegant UI and performant code. Below are a few highlights of my work and experience.
              </p>
            </div>

            {/* Info cards stacked */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 rounded-xl bg-gradient-to-r from-[#fff8f0] to-white border border-slate-100 p-5 shadow-sm">
                  <div className="text-sm text-slate-500"></div>
                  <div className="mt-1 text-lg font-semibold text-slate-900">Complete Projects</div>
                  <div className="text-sm text-slate-600 mt-2">Delivered polished websites and landing pages for clients and personal projects.</div>
                </div>

                <div className="flex-1 rounded-xl bg-gradient-to-r from-[#f6f7ff] to-white border border-slate-100 p-5 shadow-sm">
                  <div className="text-sm text-slate-500">1+</div>
                  <div className="mt-1 text-lg font-semibold text-slate-900">Years Experience</div>
                  <div className="text-sm text-slate-600 mt-2">Working primarily with React, Tailwind, and modern build tools.</div>
                </div>
              </div>

              {/* optional single highlight */}
              <div className="rounded-xl border border-slate-100 p-4 bg-white/80 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-[#EDEAFF] flex items-center justify-center text-[#7c3aed]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Design + Code</div>
                    <div className="text-sm text-slate-600 mt-1">I pair design thinking with practical engineering — creating interfaces that feel natural and perform well.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div className="mt-3 flex items-center gap-4">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-[#FFD166] to-[#FF8A65] text-white font-semibold shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffd166]"
              >
                Download CV
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v12M8 11l4 4 4-4M21 21H3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="text-sm text-slate-700 hover:underline"
                aria-label="Contact me"
              >
                Or send a message →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
