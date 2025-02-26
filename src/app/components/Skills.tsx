"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { name: "HTML", percentage: 90, color: "text-red-400" },
  { name: "CSS", percentage: 80, color: "text-blue-400" },
  { name: "JavaScript", percentage: 75, color: "text-yellow-400" },
  { name: "TypeScript", percentage: 70, color: "text-purple-400" },
  { name: "Next.js", percentage: 80, color: "text-green-400" },
  { name: "Python", percentage: 30, color: "text-indigo-400" },
];

const professionalSkills = [
  { name: "Creativity", percentage: 90 },
  { name: "Communication", percentage: 70 },
  { name: "Problem Solving", percentage: 80 },
  { name: "Teamwork", percentage: 85 },
];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);
  const circlesRef = useRef<SVGCircleElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    barsRef.current.forEach((bar, index) => {
      if (bar) {
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${skillsData[index].percentage}%`,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 80%",
            },
          }
        );
      }
    });

    circlesRef.current.forEach((circle, index) => {
      if (circle) {
        gsap.fromTo(
          circle,
          { strokeDashoffset: 251 },
          {
            strokeDashoffset: 251 - (251 * professionalSkills[index].percentage) / 100,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: circle,
              start: "top 80%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#0A192F] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          My{" "}
          <span className="text-[#64FFDA]">Skills</span>
        </h2>
  
        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2 text-white">
              Technical Skills
            </h3>
            {skillsData.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between">
                  <p className={`text-lg font-semibold`}>
                    <span className={
                      skill.name === "HTML" ? "text-red-400" :
                      skill.name === "CSS" ? "text-blue-400" :
                      skill.name === "JavaScript" ? "text-yellow-400" :
                      skill.name === "TypeScript" ? "text-purple-400" :
                      skill.name === "Next.js" ? "text-green-400" :
                      skill.name === "Python" ? "text-indigo-400" :
                      "text-white"
                    }>
                      {skill.name}
                    </span>
                  </p>
                  <p className="text-sm font-bold text-white">{skill.percentage}%</p>
                </div>
                <div className="bg-gray-700 h-3 rounded-full relative mt-1">
                  <div
                    ref={(el) => {
                      if (el) barsRef.current[index] = el;
                    }}
                    className="h-full bg-[#64FFDA] rounded-full shadow-lg"
                    style={{ width: "0%" }} // GSAP will animate this
                  ></div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Professional Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2 text-white">
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {professionalSkills.map((skill, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-24 h-24 mx-auto">
                    <svg width="100" height="100" className="absolute top-0 left-0">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="gray"
                        strokeWidth="6"
                        fill="transparent"
                      />
                      <circle
                        ref={(el) => {
                          if (el) circlesRef.current[index] = el;
                        }}
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#64FFDA"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray="251"
                        strokeDashoffset="251"
                        strokeLinecap="round"
                        className="transition-all duration-500 ease-in-out"
                      />
                    </svg>
                    <p className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
                      {skill.percentage}%
                    </p>
                  </div>
                  <p className="text-lg mt-3 font-semibold text-white">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;