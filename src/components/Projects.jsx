import React from "react";

/**
 * Projects.jsx
 *
 * - Drop project thumbnails into src/assets (or public/) and import them at top,
 *   or reference public URLs in the `img` field below.
 * - Each project object supports: id, title, img, description, tags, github, live
 * - Hover / focus shows an overlay with "View Live" and "GitHub" buttons
 * - Keyboard accessible: overlay actions are regular links/buttons
 *
 * Paste into: src/components/Projects.jsx
 */

/* === Example images (replace or add imports to your real thumbnails) ===
   If you keep images in src/assets, import them:
   import p1 from "../assets/project1.jpg";
   import p2 from "../assets/project2.jpg";
   ...
 */
import p1 from "../assets/weather.png";
import p2 from "../assets/swms.png";
import p3 from "../assets/sales.png";
import p4 from "../assets/med.png";

/* === Project list ===
   - icon fields github/live are optional; if absent, the corresponding button is hidden
   - img can be an imported module (recommended) or a root-relative public path like "/projects/foo.jpg"
*/
const PROJECTS = [
  {
    id: "p1",
    title: "Weather App",
    img: p1,
    description: "ahows weather.",
    tags: ["React", "Tailwind"],
    github: "https://github.com/murjanii/Weather-app",
    live: "https://weather-app-a9la.vercel.app/",
  },
  {
    id: "p2",
    title: "Smart Waste Managemnet",
    img: p2,
    description: "A Smart Waste Management System that streamlines waste collection, complaint tracking, driver assignment, and bin monitoring with a modern, automated dashboard",
    tags: ["Javascript","React.js", "Tailwind css","Mongodb","Node.js+express"],
    githubFrontend: "https://github.com/murjanii/SWMS-FRONTEND",
    githubBackend: "https://github.com/murjanii/SWMS-BACKEND",
    live: "https://swms-frontend-p17h-q0iqw4th9-vineet-murjanis-projects.vercel.app", // empty string hides the live button
  },
  {
    id: "p3",
    title: "Sales Dashboard",
    img: p3,
    description: "Dashboard for Analysis of sales in businuess .",
    tags: ["Javascript","React.js", "Tailwindcss"],
    github: "https://github.com/murjanii/salesdashboard",
    live: "https://salesdashboard-mu.vercel.app/",
  },
   {
    id: "p4",
    title: "Medical Dashboard",
    img: p4,
    description: "Dashboard for Analysis of Patients in hospital .",
    tags: ["Javascript","React.js", "Tailwindcss"],
    github: "https://github.com/murjanii/medicaldasboard",
    live: "https://medicaldasboard.vercel.app",
  },
];

/* === Reusable ProjectCard === */
function ProjectCard({ project }) {
  return (
    <article
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transform transition-all duration-300"
      aria-labelledby={`proj-${project.id}-title`}
    >
      {/* Thumbnail */}
      <div className="w-full h-48 sm:h-56 md:h-44 lg:h-52 overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Card content */}
      <div className="p-4 sm:p-5">
        <h3 id={`proj-${project.id}-title`} className="text-sm font-semibold text-slate-900">
          {project.title}
        </h3>
        <p className="mt-1 text-xs text-slate-500 line-clamp-2">{project.description}</p>

        {/* tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags?.map((t) => (
            <span key={t} className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Overlay (appears on hover & focus) */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300
                    flex items-end justify-center p-4"
        aria-hidden={!/* visually hidden if no actions */ (project.github || project.live)}
      >
        <div className="w-full flex items-center justify-between gap-3">
          {/* GitHub button */}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-slate-900 text-sm font-medium shadow hover:scale-105 transform transition"
              aria-label={`Open ${project.title} on GitHub`}
            >
              {/* GitHub icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.22 9.16 7.69 10.64.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.95-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.16 1.71 1.16 1 .17 1.56-.74 1.56-.74.99-1.7 2.6-1.21 3.23-.93.1-.72.39-1.21.71-1.49-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.45.11-3.02 0 0 .95-.31 3.12 1.16a10.9 10.9 0 012.84-.38c.96.01 1.93.13 2.84.38 2.16-1.47 3.11-1.16 3.11-1.16.62 1.57.24 2.73.12 3.02.72.79 1.16 1.79 1.16 3.02 0 4.33-2.64 5.28-5.15 5.56.4.34.75 1.03.75 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.78.54A11.26 11.26 0 0023.25 11.75C23.25 5.48 18.27.5 12 .5z" />
              </svg>
              GitHub
            </a>
          ) : (
            <div />
          )}

          {/* Live button */}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white text-sm font-medium shadow hover:brightness-105 transform transition"
              aria-label={`Open live demo of ${project.title}`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M21 3L10 14" />
                <path d="M21 21H3V3" />
              </svg>
              View Live
            </a>
          ) : (
            <div />
          )}
        </div>
      </div>
    </article>
  );
}

/* === Main Projects component === */
export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h3 className="text-sm text-slate-500">Portfolio</h3>
          <h2 className="text-3xl font-extrabold">My Recently Finished Projects</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            A selection of projects — click to view code or live demos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
