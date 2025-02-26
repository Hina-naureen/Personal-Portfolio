"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const projects = [
  {
    title: "E-Commerce Store",
    description: "A fully responsive online store built with Next.js and Tailwind CSS.",
    image: "/shop.png",
    link: "https://templete-seven.vercel.app/",
  },
  {
    title: "Light House",
    description: "A portfolio website with SEO optimization and ranking analysis.",
    image: "/se.png",
    link: "https://hina-portfolio.vercel.app",
  },
  {
    title: "Blog Website",
    description: "A dynamic blog site powered by Sanity CMS for content management.",
    image: "/Blog1.png",
    link: "https://blog-zeta-pink-82.vercel.app/"
  },
  {
    title: "Dynamic Resume",
    description: "An interactive resume generator with customizable templates.",
    image: "/Dynamic resume.png",
    link: "https://milestone-3-hina.vercel.app/",
  },
  {
    title: "Hackathon",
    description: "A job portal platform for posting and finding job opportunities.",
    image: "/HH.png",
    link: "https://hackathon-3-woad.vercel.app/",
  },
  {
    title: "Countdown Timer",
    description: "A real-time countdown timer fetching data from an API.",
    image: "/C-D2.png",
    link: "https://countdown-timer-84xl.vercel.app/",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]); // ✅ Type added

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  const handleMouseEnter = (index: number) => {
    const card = projectRefs.current[index];
    if (!card) return;

    gsap.to(card, {
      rotateY: 15,
      rotateX: 5,
      transformOrigin: "center bottom",
      scale: 1.05,
      boxShadow: "0px 20px 40px rgba(100, 255, 218, 0.2)",
      duration: 0.2,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = projectRefs.current[index];
    if (!card) return;

    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      boxShadow: "0px 10px 20px rgba(100, 255, 218, 0.1)",
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <section ref={sectionRef} className="py-16 bg-[#0A192F] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-[#64FFDA]">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                if (!projectRefs.current) projectRefs.current = []; // Ensure it's an array
                projectRefs.current[index] = el;
              }}
              className="relative bg-[#112240] p-5 rounded-lg shadow-lg transition-all duration-300 group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full rounded-md"
                unoptimized
              />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <Link
                  href={project.link}
                  target="_blank"
                  className="px-4 py-2 bg-[#64FFDA] text-black font-semibold rounded-md shadow-md 
                            hover:bg-white transition-all duration-300"
                >
                  Visit Vercel
               
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;