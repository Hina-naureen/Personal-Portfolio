"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const About = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.5, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#0A192F] flex items-center justify-center text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side - Animated Image */}
        <div ref={imgRef} className="relative mt-10 md:mt-0">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-[6px] border-[#64FFDA] shadow-xl">
            <Image 
              src="/pct.jpg" 
              alt="Hina Yaqoob" 
              width={256} 
              height={256} 
              className="w-full h-full object-cover" 
            />
          </div>
          {/* Neon Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-[#64FFDA] opacity-30 blur-3xl animate-pulse"></div>
        </div>

        {/* Right Side - About Text */}
        <div ref={textRef} className="max-w-2xl mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-4xl font-bold">About <span className="text-[#64FFDA]">Me</span></h2>
          <h3 className="text-2xl font-semibold mt-2 text-gray-300">Frontend Developer!</h3>
          <p className="mt-4 text-gray-400 leading-7">
            I am a skilled web developer specializing in modern frontend technologies like Next.js and Tailwind CSS.
            With a keen eye for design and performance, I create interactive, user-friendly, and visually appealing 
            websites that leave a lasting impression.
          </p>

          {/* More About Me Button */}
          <button className="mt-6 px-6 py-3 text-lg font-semibold bg-[#64FFDA] text-[#0a192f] rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-[#64FFDA] hover:shadow-2xl">
            More About Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;