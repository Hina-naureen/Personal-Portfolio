"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#0A192F] flex items-center justify-center text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text Content */}
        <div ref={textRef} className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hello, Its Me <br />
            <span className="text-[#64FFDA]">Hina Yaqoob</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            I am a Frontend Developer specializing in modern web technologies like Next.js & Tailwind CSS.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 text-lg font-semibold bg-[#64FFDA] text-black rounded-md hover:shadow-lg transition duration-300">
              Hire Me
            </button>
          </div>
        </div>

        {/* Right Side: Animated Image */}
        <div ref={imageRef} className="relative mt-10 md:mt-0">
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
      </div>
    </section>
  );
};

export default Hero;