import React, { useState } from "react";
import "./Navbar.css";

// SVG Icons for each section
const HomeIcon = () => (
  <svg
    className="nav-icon"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 10.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.5" />
    <path d="M2.5 12L12 3l9.5 9" />
    <line x1="12" y1="16" x2="12" y2="21" />
  </svg>
);

const AboutIcon = () => (
  <svg
    className="nav-icon"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ProjectsIcon = () => (
  <svg
    className="nav-icon"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const SkillsIcon = () => (
  <svg
    className="nav-icon"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);

const EducationIcon = () => (
  <svg
    className="nav-icon"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const ContactIcon = () => (
  <svg
    className="nav-icon"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = [
    { name: "Home", icon: <HomeIcon /> },
    { name: "About", icon: <AboutIcon /> },
    { name: "Skills", icon: <SkillsIcon /> },
    { name: "Education", icon: <EducationIcon /> },
    { name: "Projects", icon: <ProjectsIcon /> },
    { name: "Contact", icon: <ContactIcon /> },
  ];

  return (
    <div className="my-30">
      <div className="navbar">
        <div className="bg-white rounded-[10px]">
          <nav className="floating-navbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.name;

              return (
                <button
                  key={tab.name}
                  className={`nav-item ${isActive ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.name)}
                  aria-pressed={isActive}
                >
                  {/* 
              To achieve smooth animation, we ALWAYS render the icon into the DOM.
              We use CSS on the .icon-wrapper to animate its width and opacity 
              from 0 to its full size when isActive becomes true.
            */}
                  <span
                    className={`icon-wrapper ${isActive ? "show-icon" : ""}`}
                  >
                    {tab.icon}
                  </span>
                  <span className="nav-text">{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
