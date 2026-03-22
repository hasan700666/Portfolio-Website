import React, { useState } from "react";

const Education = () => {
  const [hovered, setHovered] = useState(null);
  const educationData = [
    {
      period: "Jan 2020 – Dec 2024",
      degree: "Bachelor of Science",
      field: "Computer Science & Engineering",
      institution: "Your University Name",
      location: "City, Country",
      grade: "CGPA: 3.75 / 4.00",
      text: undefined,
    },
    {
      period: "Jan 2018 – Dec 2019",
      degree: "Higher Secondary Certificate",
      field: "Science",
      institution: "Your College Name",
      location: "City, Country",
      grade: "GPA: 5.00 / 5.00",
      text: undefined,
    },
    {
      text: "what's next?",
    },
  ];

  return (
    <section id="education">
      <style>{`
      .about-body {
        font-size: 14px;
        font-weight: 300;
        line-height: 1.7;
        color: white;
        max-width: 300px;
      }
    `}</style>
      <div className="text-white flex justify-center gap-26 pt-40">
        <div className="h-133 overflow-hidden">
          <div className="flex flex-col items-center justify-center pt-10 w-88">
            <div className="flex flex-col gap-4 w-full max-w-md">
              {educationData.map((edu, i) =>
                edu.text ? (
                  <div>
                    <div
                      className={`bg-white rounded-xl px-6 py-5 border transition-all duration-200 cursor-default
              ${hovered === i ? "" : ""}`}
                    >
                      <p className="text-black text-[50px] font-bold mb-1 text-center ">
                        {edu.text}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div
                    key={i}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className={`bg-white rounded-xl px-6 py-5 border transition-all duration-200 cursor-default
              ${hovered === i ? "" : ""}`}
                  >
                    <span className="inline-block bg-black border border-black text-white text-[11px] font-medium rounded-[7px] px-3 py-0.5 mb-3 tracking-wide">
                      {edu.period}
                    </span>
                    <p className="text-black text-[17px] font-bold mb-1">
                      {edu.degree}
                    </p>
                    <p className="text-black text-sm mb-2">{edu.field}</p>
                    <p className="text-black text-sm font-medium">
                      {edu.institution}
                    </p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-black text-xs">{edu.location}</span>
                      <span className="bg-black border border-black text-white text-[11px] font-medium rounded-[7px] px-3 py-0.5">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-14">
          <div className="text-[100px]">. education</div>
          <div className="about-body text-end">
            I am a Full Stack Developer passionate about building scalable,
            user-centric web applications that combine clean, intuitive
            interfaces with robust and reliable APIs. My focus is on creating
            solutions that not only work efficiently but also deliver smooth and
            engaging user experiences.
          </div>
        </div>
      </div>
      <hr class="h-3 ml-10 mr-10 bg-white border-0 rounded" />
    </section>
  );
};

export default Education;
