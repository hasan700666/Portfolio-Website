import React, { useState, useEffect } from "react";
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

const ExperienceIcon = () => (
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
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
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
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
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

// id গুলো প্রতিটা section-এর id এর সাথে exact match করতে হবে
const tabs = [
  { name: "Home", id: "home", icon: <HomeIcon /> },
  { name: "About", id: "about", icon: <AboutIcon /> },
  { name: "Education", id: "education", icon: <EducationIcon /> },
  { name: "Skills", id: "skills", icon: <SkillsIcon /> },
  { name: "Projects", id: "projects", icon: <ProjectsIcon /> },
  { name: "Contact", id: "contact", icon: <ContactIcon /> },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  // ── Scroll Spy: user scroll করলে active tab auto-update হবে ──
  useEffect(() => {
    const handleScroll = () => {
      // 80px offset: fixed navbar-এর height account করতে
      const scrollY = window.scrollY + 80;

      for (let i = tabs.length - 1; i >= 0; i--) {
        const section = document.getElementById(tabs[i].id);
        if (section && section.offsetTop <= scrollY) {
          setActiveTab(tabs[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // component mount হলে একবার run করবে
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Click → smooth scroll ──────────────────────────────────────
  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    const section = document.getElementById(tab.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="my-25">
      <div className="navbar">
        <div className="bg-white rounded-[10px]">
          <nav className="floating-navbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.name;
              return (
                <button
                  key={tab.name}
                  className={`nav-item ${isActive ? "active" : ""}`}
                  onClick={() => handleTabClick(tab)}
                  aria-pressed={isActive}
                >
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
