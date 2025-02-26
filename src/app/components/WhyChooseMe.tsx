"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const WhyChooseMe = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#0A192F] flex items-center justify-center text-white">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Why <span className="text-[#64FFDA]">Choose Me?</span>
        </h2>

        {/* Content Box */}
        <div
          ref={textRef}
          className="bg-[#102A43] text-left p-8 rounded-lg shadow-lg max-w-3xl border border-[#64FFDA] relative"
        >
          {/* Handshake Icon */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#64FFDA] p-4 rounded-full shadow-md">
            🤝
          </div>

          {/* Features */}
          <ul className="space-y-4 text-lg">
            <li>
              <span className="text-[#64FFDA] font-semibold">
                CREATIVE & UNIQUE DESIGNS:
              </span>{" "}
              Craft original and eye-catching visuals tailored to your brand.
            </li>
            <li>
              <span className="text-[#64FFDA] font-semibold">
                ATTENTION TO DETAIL:
              </span>{" "}
              Every design is carefully thought out to ensure quality and impact.
            </li>
            <li>
              <span className="text-[#64FFDA] font-semibold">
                FAST & RELIABLE SERVICE:
              </span>{" "}
              I meet deadlines without compromising on creativity.
            </li>
            <li>
              <span className="text-[#64FFDA] font-semibold">
                CLIENT-FOCUSED APPROACH:
              </span>{" "}
              Your vision and satisfaction are my top priorities.
            </li>
            <li>
              <span className="text-[#64FFDA] font-semibold">
                UP-TO-DATE WITH TRENDS:
              </span>{" "}
              I stay current with design trends to keep your brand fresh and modern.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;