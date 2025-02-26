"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const projects = [
  {
    title: "E-Commerce Store",
    description: "A fully responsive e-commerce store with Next.js & Tailwind CSS.",
    image: "/images/project1.png",
    link: "https://ecommerce-project.vercel.app",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my projects and skills.",
    image: "/images/project2.png",
    link: "https://hina-portfolio.vercel.app",
  },
  {
    title: "Blog Website",
    description: "A modern blog site with dynamic content using Sanity CMS.",
    image: "/images/project3.png",
    link: "https://blog-project.vercel.app",
  },
  {
    title: "Real Estate App",
    description: "A property listing app with search and filter features.",
    image: "/images/project4.png",
    link: "https://realestate.vercel.app",
  },
  {
    title: "Job Board",
    description: "A job portal for finding and posting job listings.",
    image: "/images/project5.png",
    link: "https://jobboard.vercel.app",
  },
  {
    title: "Weather App",
    description: "A weather app fetching real-time data from an API.",
    image: "/images/project6.png",
    link: "https://weatherapp.vercel.app",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

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
              className="relative bg-[#112240] p-5 rounded-lg shadow-lg transition-transform duration-300 group
                         before:absolute before:inset-0 before:bg-[#64FFDA] before:rounded-lg before:-z-10 before:blur-lg 
                         before:opacity-50 hover:before:opacity-100 hover:-translate-y-2"
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
                <Link
                  href="https://www.linkedin.com/in/hina-yaqoob"
                  target="_blank"
                  className="px-4 py-2 border-2 border-[#64FFDA] text-[#64FFDA] font-semibold rounded-md shadow-md 
                            hover:bg-[#64FFDA] hover:text-black transition-all duration-300"
                >
                  View on LinkedIn
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