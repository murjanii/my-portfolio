import React, { useState } from "react";
import emailjs from "@emailjs/browser";

/**
 * New Contact design — diagonal floating tiles + compact form inside a glass card
 * Save as: src/components/Contact.jsx
 *
 * Tailwind CSS only. Replace EMAIL / PHONE / LINKEDIN at top as needed.
 */

export default function Contact() {
  const EMAIL = "vineetmurjani672@gmail.com";
  const PHONE = "7023705890";
  const LINKEDIN = "https://www.linkedin.com/in/vineet-murjani-bab7a4221";

  const [copyMsg, setCopyMsg] = useState("");
  const [status, setStatus] = useState(null);

  async function copyToClipboard(text, label) {
    try {
      await navigator.clipboard.writeText(text);
      setCopyMsg(`${label} copied`);
      setTimeout(() => setCopyMsg(""), 2200);
    } catch {
      setCopyMsg("Copy failed");
      setTimeout(() => setCopyMsg(""), 2200);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const name = f.name.value.trim();
    const email = f.email.value.trim();
    const message = f.message.value.trim();
    if (!name || !email || !message) {
      setStatus({ ok: false, msg: "Please complete all fields." });
      return;
    }

    setStatus({ ok: null, msg: "Sending..." });

    try {
      await emailjs.send(
        "service_081crit",
        "template_j6to9lx",
        {
          from_name: name,
          from_email: email,
          message: message,
          to_email: "vineetmurjani672@gmail.com",
        },
        "BAHC-rKpBeFBtW6pt"
      );

      setStatus({ ok: true, msg: "Message sent successfully! I'll get back to you soon." });
      f.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({ ok: false, msg: "Failed to send message. Please try again or contact me directly." });
    }

    setTimeout(() => setStatus(null), 5000);
  }

  return (
    <section id="contact" className="relative py-20 bg-white">
      {/* Decorative background stripe */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-r from-[#fbcfe8] to-transparent opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-slate-500">Contact</p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Work with me — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#4f46e5]">let's connect</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Quick tiles for instant actions plus a compact message form. Clean, fast, and mobile-friendly.
          </p>
        </div>

        {/* Glass card */}
        <div className="relative">
          {/* Avatar badge overlapping the card */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 md:left-12 md:translate-x-0 z-20">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] flex items-center justify-center text-white font-bold text-lg shadow-xl">
              VM
            </div>
          </div>

          <div className="mt-12 bg-white/60 backdrop-blur-md border border-white/30 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 md:p-8">
              {/* LEFT: diagonal floating tiles (stacked on mobile) */}
              <div className="relative flex items-center justify-center">
                <div className="w-full max-w-xs">
                  {/* tile 1 (top) */}
                <div className="relative mb-6">
  <div className="absolute -left-8 -top-4 w-4 h-4 rounded-full bg-[#fbcfe8] opacity-80" />

 <button
                      onClick={() => copyToClipboard(EMAIL, "EMAIL")}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white shadow-sm border border-white/30 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-purple-300"
                      aria-label={`Copy phone ${EMAIL}`}
                    >
    {/* --- Gmail Icon (SVG from /public/icons/) --- */}
    <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-[white] to-[white] flex items-center justify-center">
      <img
        src="/gmail.svg"
        alt="Gmail icon"
        className="w-5 h-5"
      />
    </span>

    <div className="text-left">
      <div className="text-xs text-slate-500">Email</div>
      <div className="text-sm font-medium text-slate-700 truncate">{EMAIL}</div>
    </div>
  </button>
</div>


                  {/* tile 2 (middle, slightly offset) */}
                  <div className="relative mb-6 ml-6">
                    <div className="absolute -left-8 -top-4 w-4 h-4 rounded-full bg-[#fff3f8] opacity-80" />
                    <button
                      onClick={() => copyToClipboard(PHONE, "Phone")}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white shadow-sm border border-white/30 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-purple-300"
                      aria-label={`Copy phone ${PHONE}`}
                    >
                      <span className="w-10 h-10 rounded-lg bg-pink-200 flex items-center justify-center text-[#7c3aed]">☎</span>
                      <div className="text-left">
                        <div className="text-xs text-slate-500">Phone</div>
                        <div className="text-sm font-medium text-slate-700">{PHONE}</div>
                      </div>
                    </button>
                  </div>

                  {/* tile 3 (bottom, more offset) */}
                  <div className="relative ml-12">
                    <div className="absolute -left-8 -top-4 w-4 h-4 rounded-full bg-[#eef2ff] opacity-80" />
                    <a
                      href="https://www.linkedin.com/in/vineet-murjani-bab7a4221"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white shadow-sm border border-white/30 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-purple-300"
                      aria-label="Open LinkedIn profile"
                    >
                     <img src="/linkedin.svg" alt="linkedin" className="w-5 h-5" />
                      <div className="text-left">
                        <div className="text-xs text-slate-500">LinkedIn</div>
                        <div className="text-sm font-medium text-slate-700">Open profile</div>
                      </div>
                    </a>
                  </div>

                  {/* copy message */}
                  {copyMsg && <div className="mt-4 text-sm text-slate-700">{copyMsg}</div>}
                </div>
              </div>

              {/* RIGHT: compact form */}
              <div className="flex items-start justify-center">
                <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4" aria-label="Contact form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="sr-only" htmlFor="c-name">Name</label>
                    <input id="c-name" name="name" type="text" placeholder="Your name" className="rounded-lg px-3 py-2 border border-white/20 bg-white/90 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#a78bfa]" required />
                    <label className="sr-only" htmlFor="c-email">Email</label>
                    <input id="c-email" name="email" type="email" placeholder="you@domain.com" className="rounded-lg px-3 py-2 border border-white/20 bg-white/90 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#a78bfa]" required />
                  </div>

                  <label className="sr-only" htmlFor="c-message">Message</label>
                  <textarea id="c-message" name="message" rows="5" placeholder="Briefly describe your project" className="w-full rounded-lg px-3 py-2 border border-white/20 bg-white/90 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#a78bfa] resize-y" required />

                  <div className="flex items-center gap-3">
                    <button type="submit" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[grey] to-[black] text-white font-medium shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400">
                      Send
                    </button>
                    <button type="button" onClick={() => { document.getElementById("c-name").value = ""; document.getElementById("c-email").value = ""; document.getElementById("c-message").value = ""; }} className="px-4 py-2 rounded-full border border-white/20 bg-white/80">
                      Clear
                    </button>
                  </div>

                  {status && <div role="status" className={`mt-2 text-sm ${status.ok ? "text-green-700" : "text-rose-600"}`}>{status.msg}</div>}
                </form>
              </div>
            </div>
          </div>

          {/* bottom mini nav */}
          <div className="mt-8 text-center col-span-full">
            <nav className="flex items-center justify-center gap-8 text-sm text-slate-700">
              <a href="#about" className="hover:underline">About</a>
              <a href="#skills" className="hover:underline">Skills</a>
              <a href="#projects" className="hover:underline">Projects</a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
