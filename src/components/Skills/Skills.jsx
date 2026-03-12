import React, { useState } from "react";
const skills = {
  fontend: [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "DaisyUI",
      icon: "https://img.daisyui.com/images/daisyui-logo/daisyui-logotype.svg",
      fallback: "D",
    },
    {
      name: "Vite",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    { name: "REST APIs", icon: null, label: "API" },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    { name: "JWT", icon: null, label: "JWT" },
  ],
};

const SkillCard = ({ skill }) => {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "18px",
          background: hovered ? "#ffffff" : "#ffffff",
          border: hovered ? "1px solid #ffffff" : "1px solid #ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.25s ease",
          boxShadow: hovered
            ? "0 0 20px #ffffff, 0 8px 24px #000000"
            : "0 2px 12px rgba(0,0,0,0.4)",
          transform: hovered
            ? "translateY(-4px) scale(1.05)"
            : "translateY(0) scale(1)",
        }}
      >
        {skill.icon && !imgError ? (
          <img
            src={skill.icon}
            alt={skill.name}
            width={40}
            height={40}
            style={{
              objectFit: "contain",
              filter:
                skill.name === "GitHub" || skill.name === "Express.js"
                  ? "invert(1)"
                  : "none",
            }}
            onError={() => setImgError(true)}
          />
        ) : (
          <span
            style={{
              color: "#6c63ff",
              fontSize: skill.label?.length > 3 ? "11px" : "14px",
            }}
          >
            {skill.label || skill.name.slice(0, 3).toUpperCase()}
          </span>
        )}
      </div>
      <span
        style={{
          color: hovered ? "#ffffff" : "#aaaaaa",
          fontSize: "13px",
          letterSpacing: "0.3px",
          transition: "color 0.25s ease",
        }}
      >
        {skill.name}
      </span>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <section
        style={{
          background: "#000000",
          minHeight: "100vh",
          padding: "80px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        {/* Header */}
        <div className="text-[100px] text-center text-white pb-11">skills</div>

        {/* Sections */}
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            style={{
              maxWidth: "900px",
              margin: "0 auto 64px",
              position: "relative",
            }}
          >
            <h3
              style={{
                color: "#ffffff",
                fontSize: "24px",
                textAlign: "center",
                marginBottom: "36px",
              }}
            >
              {category}
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "28px",
                justifyContent: "center",
              }}
            >
              {items.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </section>
      <hr class="h-3 ml-10 mr-10 bg-white border-0 rounded" /> 
    </>
  );
};

export default Skills;
