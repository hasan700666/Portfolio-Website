import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Food Lover",
    type: "FULL-STACK WEB APPLICATION",
    img: "https://i.ibb.co.com/rKXfk5KP/Screenshot-2026-03-13-190747.png",
    about: "Local Food Lovers Network is a full-stack web application designed for food enthusiasts to discover, share, and celebrate local culinary experiences. Users can post reviews with photos, explore dishes shared by others, and connect with a community of food lovers.",
    challenges: "Designing secure authentication and real-time financial data visualization.",
    improvements: "Planning to integrate AI-based spending insights and predictive analytics.",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    demo: "https://food-lover-7eb8f.web.app/",
    clientCode: "#",
    serverCode: "#",
  },
  {
    id: 2,
    title: "Heavenly Real Estate",
    type: "FULL-STACK WEB APPLICATION",
    img: "https://i.ibb.co.com/W4cvDf0v/Screenshot-2026-03-13-191142.png",
    about: "A property listing and management platform where users can browse properties and agents can manage listings.",
    challenges: "Implementing property filtering, authentication, and role-based dashboards.",
    improvements: "Add map integration and AI property recommendation.",
    tech: ["React", "Express", "MongoDB", "Tailwind"],
    demo: "#",
    clientCode: "#",
    serverCode: "#",
  },
  {
    id: 3,
    title: "Cluvia Learning Platform",
    type: "EDUCATION PLATFORM",
    img: "https://i.ibb.co.com/202Ymzp1/Screenshot-2026-03-13-191442.png",
    about: "Cluvia is an online learning platform where students can enroll in courses and track their progress.",
    challenges: "Designing course progress tracking and secure payment integration.",
    improvements: "Planning to add live classes and AI tutor assistant.",
    tech: ["React", "Node", "MongoDB", "Stripe"],
    demo: "#",
    clientCode: "#",
    serverCode: "#",
  },
  {
    id: 4,
    title: "Trusten M-Banking",
    type: "BANKING APPLICATION",
    img: "https://i.ibb.co.com/LdtV8JwQ/Screenshot-2026-03-13-191655.png",
    about: "Trusten is a mobile banking dashboard allowing users to manage transactions and payments securely.",
    challenges: "Ensuring secure transaction processing and OTP verification.",
    improvements: "Planning to add biometric login and fraud detection.",
    tech: ["React", "Firebase", "Node", "MongoDB"],
    demo: "#",
    clientCode: "#",
    serverCode: "#",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.getElementById("project_modal").showModal();
  };

  return (
    <section id="projects">
      <div className="min-h-screen bg-black px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[90px] font-light text-white text-center mb-20 tracking-wide">
            projects
          </h1>

          {/* PROJECT GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} onClick={() => openModal(project)} className="group cursor-pointer">
                <div className="relative rounded-[11px] overflow-hidden bg-white h-90 flex items-center justify-center shadow-2xl transition duration-500 group-hover:scale-105">
                  <img src={project.img} className="h-full object-cover" />
                  <span className="absolute text-black text-4xl font-medium opacity-0 group-hover:opacity-100 transition">
                    View Details
                  </span>
                </div>
                <h3 className="text-xl font-light text-white mt-6 text-center">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>

          {/* MODAL */}
          <dialog id="project_modal" className="modal">
            <div className="modal-box max-w-6xl bg-[#0b0b0b] text-white border border-white/10 rounded-[11px] p-0 overflow-hidden">
              {selectedProject && (
                <div>
                  {/* HERO IMAGE */}
                  <div className="relative h-80 overflow-hidden">
                    <img src={selectedProject.img} className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/60 to-black"></div>
                    <div className="absolute bottom-10 left-10">
                      <p className="text-black bg-white p-1 px-2 rounded-[7px] text-sm tracking-widest mb-3 mr-76 text-center">
                        {selectedProject.type}
                      </p>
                      <h2 className="text-5xl font-bold">{selectedProject.title}</h2>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="grid md:grid-cols-3 gap-10 p-10">
                    {/* LEFT */}
                    <div className="md:col-span-2 space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">About the Project</h3>
                        <p className="text-gray-400 leading-relaxed">{selectedProject.about}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Challenges</h3>
                        <p className="text-gray-400 leading-relaxed">{selectedProject.challenges}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Improvements</h3>
                        <p className="text-gray-400 leading-relaxed">{selectedProject.improvements}</p>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-6">
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <p className="text-gray-400 text-sm mb-4">TECH STACK</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map((tech, i) => (
                            <span key={i} className="bg-white/10 px-3 py-1 text-sm rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        {/* Live Demo */}
                        <a
                          href={selectedProject.demo}
                          className="block text-center bg-white text-black hover:bg-black hover:text-white border-4 border-white py-3 rounded-xl font-medium"
                        >
                          Live Demo
                        </a>

                        {/* Client Code */}
                        <a
                          href={selectedProject.clientCode}
                          className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 py-3 rounded-xl transition"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Client Code
                        </a>

                        {/* Server Code */}
                        <a
                          href={selectedProject.serverCode}
                          className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 py-3 rounded-xl transition"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                          </svg>
                          Server Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
      <hr className="h-3 ml-10 mr-10 bg-white border-0 rounded" />
    </section>
  );
};

export default Projects;