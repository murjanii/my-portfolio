import React, { useState, useRef, useEffect } from "react";

/**
 * Navbar.jsx — UI-refresh only (inspired by example)
 * - Dark rounded bar look, centered nav visually
 * - Desktop: brand left, nav centered, CTA right
 * - Mobile: brand left, centered hamburger, mobile panel centered below
 * - Accessibility: aria-expanded, aria-controls, Esc closes, click outside closes
 *
 * NOTE: This file changes only the UI/visuals. Link labels & hrefs are unchanged placeholders.
 */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const panelId = "mobile-menu-panel";

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onDocClick(e) {
      if (open && panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-6 z-50">
      <div className="max-w-7x1 mx-auto px-4 sm:px-6">
        {/* Rounded dark bar */}
        <div className="bg-[#0b0f17]/95 text-white rounded-2xl shadow-xl backdrop-blur-sm border border-white/6">
          {/* Main row */}
          <div className="hidden md:flex items-center justify-between h-15 px-5">
            {/* Left: brand */}
            <a href="#home" className="flex items-center gap-3 shrink-0">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                style={{ background: "linear-gradient(135deg,#7c3aed 0%,#4f46e5 100%)" }}
                aria-hidden
              >
                VM
              </div>
              <span className="text-sm font-medium text-slate-100">Vineet Murjani</span>
            </a>

            {/* Center: nav (visually centered) */}
            <nav className="flex items-center gap-8 mx-auto">
              <a href="#skills" className="text-sm text-slate-200 hover:text-white transition">Skills</a>
              <a href="#About" className="text-sm text-slate-200 hover:text-white transition">About</a>
              <a href="#projects" className="text-sm text-slate-200 hover:text-white transition">Projects</a>
              <a href="#contact" className="text-sm text-slate-200 hover:text-white transition">Contact</a>
            </nav>

            {/* Right: CTA */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#f97316] to-[#ec4899] text-white text-sm font-medium shadow hover:brightness-105 transition"
                aria-label="Contact"
              >
                LET'S TALK
              </a>
            </div>
          </div>

          {/* Mobile row */}
          <div className="md:hidden">
            <div className="flex items-center justify-between px-4 py-3">
              {/* Brand on left */}
              <a href="#home" className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-bold"
                  style={{ background: "linear-gradient(135deg,#7c3aed 0%,#4f46e5 100%)" }}
                  aria-hidden
                >
                  VM
                </div>
              </a>

              {/* Centered hamburger button (absolute center) */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <button
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpen((s) => !s)}
                  className="p-2 rounded-md bg-white/6 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  aria-label="Toggle menu"
                >
                  <svg className={`w-6 h-6 transition-transform ${open ? "rotate-90" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                  </svg>
                </button>
              </div>

              {/* Right spacer to keep layout visually balanced */}
              <div className="w-9 h-9" />
            </div>

            {/* Mobile menu panel centered below */}
            <div className="relative">
              {open && (
                <div
                  ref={panelRef}
                  id={panelId}
                  role="menu"
                  aria-label="Mobile menu"
                  className="mx-auto mt-3 w-[92%] max-w-xs bg-white rounded-2xl shadow-2xl p-4 text-center"
                >
                  <a href="#skills" role="menuitem" className="block py-2 text-slate-700 hover:text-slate-900">Skills</a>
                  <a href="#About" role="menuitem" className="block py-2 text-slate-700 hover:text-slate-900">About</a>
                  <a href="#projects" role="menuitem" className="block py-2 text-slate-700 hover:text-slate-900">Projects</a>
                  <a href="#contact" role="menuitem" className="inline-block mt-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white">Contact</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
