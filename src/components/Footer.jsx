import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[black] via-[black] to-[black] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* --- ONE ROW LAYOUT --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
              }}
            >
              VM
            </div>
            <div>
              <h3 className="text-lg font-semibold">Vineet Murjani</h3>
              <p className="text-sm text-purple-100">
                Front-end Developer & Designer
              </p>
            </div>
          </div>

          {/* Navigation - row */}
          <nav className="flex items-center gap-6 text-sm">
            <a href="/" className="hover:text-purple-200 transition">Home</a>
            <a href="#about" className="hover:text-purple-200 transition">About</a>
            <a href="#skills" className="hover:text-purple-200 transition">Skills</a>
            <a href="#projects" className="hover:text-purple-200 transition">Projects</a>
            <a href="#contact" className="hover:text-purple-200 transition">Contact</a>
          </nav>

          {/* Social Icons - row (use <img> from public/) */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/murjanii"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
            >
              <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/vineet-murjani-bab7a4221"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
            >
              <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            </a>

            <a
              href="mailto:vineetmurjani672@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
            >
              <img src="/gmail.svg" alt="Email" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-purple-100 text-sm mt-8">
          © {year} Vineet Murjani. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
