import React from "react";

/*
  Skills.jsx
  - Place SVG icons at: public/skills/<name>.svg (root path: /skills/<name>.svg)
  - Clean layout, gradient-ring circular icons, hover animations.
  - Robust onError fallback (data URL) prevents empty icon spots.
*/

const SKILLS = [
  { id: "html", name: "HTML", icon: "/public/html.svg", level: 90},
  { id: "css", name: "CSS", icon: "/public/css.svg", level: 75 },
  { id: "js", name: "JavaScript", icon: "/public/Js.svg", level: 80 },
  { id: "react", name: "React.js", icon: "/public/react.svg", level: 80 },
  { id: "tailwind", name: "Tailwind CSS", icon: "/public/tailwind.svg", level: 84 },
   { id: "python", name: "Python", icon: "/public/python.svg", level: 70 },
    { id: "node", name: "Node.js", icon: "/public/node.svg", level: 70 },
     { id: "mongo", name: "MongoDB", icon: "/public/mongo.svg", level: 60 },
      { id: "sql", name: "Sql", icon: "/public/sql.svg", level: 70 },
];

export default function Skills() {
  // fallback: tiny white circle svg (data URL)
  const fallback =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10' fill='%23ffffff' /></svg>`
    );

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm text-slate-500">My Toolbox</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Skills & Tools
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            The core front-end technologies and tools I rely on to build fast, accessible, and delightful interfaces.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {SKILLS.map((s) => (
            <article
              key={s.id}
              className="group bg-white rounded-2xl border border-slate-100 p-4 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
              aria-labelledby={`skill-${s.id}`}
            >
              <div className="flex items-center gap-4">
                {/* Gradient ring circle like footer but polished */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(124,58,237,0.10), rgba(79,70,229,0.04))",
                    }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/0 transition group-hover:scale-105">
                      <img
                        src={s.icon}
                        alt={`${s.name} icon`}
                        className="w-6 h-6 object-contain"
                        onError={(e) => {
                          if (e?.currentTarget?.src !== fallback) e.currentTarget.src = fallback;
                        }}
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* subtle outer glow on hover */}
                  <span
                    className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      boxShadow: "0 6px 18px rgba(79,70,229,0.08)",
                    }}
                  />
                </div>

                <div className="min-w-0">
                  <h3
                    id={`skill-${s.id}`}
                    className="text-sm font-semibold text-black-900 group-hover:text-[#000000] truncate"
                  >
                    {s.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-xs text-slate-500">Proficient</span>
                    <span className="ml-auto text-xs text-slate-400">{s.level}%</span>
                  </div>
                </div>
              </div>

              {/* progress bar */}
              <div className="mt-3">
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-2 rounded-full transition-all"
                    style={{
                      width: `${s.level}%`,
                      background: "linear-gradient(black,black,black 100%)",
                    }}
                    aria-hidden
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
