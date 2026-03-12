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
    icon: <LineChart className="w-16 h-16" />,
    gradient: false,
  },
  {
    id: 2,
    title: "Heavenly Real Estate",
    icon: <Home className="w-16 h-16" />,
    gradient: false,
  },
  {
    id: 3,
    title: "Cluvia Learning Platform",
    icon: <GraduationCap className="w-16 h-16" />,
    gradient: true,
  },
  {
    id: 4,
    title: "Trusten M-Banking",
    icon: <CreditCard className="w-16 h-16" />,
    gradient: false,
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
                  className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                    project.gradient
                      ? "bg-gradient-to-br from-white to-gray-300 hover:from-gray-100 hover:to-gray-400"
                      : "bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700"
                  } p-8 h-80 flex items-center justify-center shadow-2xl group-hover:shadow-white/20 group-hover:scale-105 transition-transform duration-300`}
                >
                  <div
                    className={`transform transition-all duration-300 group-hover:scale-110 ${
                      project.gradient ? "text-black" : "text-white"
                    }`}
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
