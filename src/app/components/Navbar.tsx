"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#0A192F] shadow-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#64FFDA]">Hina Yaqoob</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <Link href="/" className="hover:text-[#64FFDA] transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#64FFDA] transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/project" className="hover:text-[#64FFDA] transition">
              Project
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="hover:text-[#64FFDA] transition">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/Skills" className="hover:text-[#64FFDA] transition">
              Skills
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          className="md:hidden absolute top-16 left-0 w-full bg-[#0A192F] flex flex-col items-center py-4 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <li>
            <Link href="/" className="text-white text-lg" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white text-lg" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          
          <li>
            <Link href="/contact" className="text-white text-lg" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/project" className="text-white text-lg" onClick={() => setIsOpen(false)}>
              Project
            </Link>
          </li>
          <li>
            <Link href="/skills" className="text-white text-lg" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;