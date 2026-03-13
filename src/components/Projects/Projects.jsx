import React from "react";
import {
  Briefcase,
  LineChart,
  Home,
  Smartphone,
  GraduationCap,
  CreditCard,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Finvera Dashboard",
    icon: (
      <img
        src="https://i.ibb.co.com/rKXfk5KP/Screenshot-2026-03-13-190747.png"
        alt="Screenshot 2026 03 13 190747"
        border="0"
      ></img>
    ),
  },
  {
    id: 2,
    title: "Heavenly Real Estate",
    icon: <img src="https://i.ibb.co.com/W4cvDf0v/Screenshot-2026-03-13-191142.png" alt="Screenshot 2026 03 13 191142" border="0"></img>,
  },
  {
    id: 3,
    title: "Cluvia Learning Platform",
    icon: <img src="https://i.ibb.co.com/202Ymzp1/Screenshot-2026-03-13-191442.png" alt="Screenshot 2026 03 13 191442" border="0"></img>,
  },
  {
    id: 4,
    title: "Trusten M-Banking",
    icon: <img src="https://i.ibb.co.com/LdtV8JwQ/Screenshot-2026-03-13-191655.png" alt="Screenshot 2026 03 13 191655" border="0"></img>,
  },
];

const Projects = () => {
  return (
    <div>
      <div className="min-h-screen bg-black px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[100px] font-light text-white text-center mb-20 tracking-wide">
            projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div
                  className={`relative rounded-3xl overflow-hidden transition-transform duration-500 bg-white p-8 h-80 flex items-center justify-center shadow-2xl group-hover:shadow-white/20 group-hover:scale-105 transition-transform duration-300`}
                >
                  <div
                    className={`transform transition-all duration-300 group-hover:scale-110
                    `}
                  >
                    {project.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-6 px-2">
                  <h3 className="text-xl font-light text-white mb-3 tracking-wide text-center">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
