"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_h7wzf3c", "template_02gw5zl", e.currentTarget, "i3_JIpPsIr7qliWYO")
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        () => {
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-20 py-16 text-white bg-[#0a192f]">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold">
          Contact <span className="text-[#64ffda]">Me</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Lets work together! Feel free to reach out to me via email or phone.
        </p>
        <div className="mt-6 space-y-2">
          <p>📧 contact@gmail.com</p>
          <p>📞 0123456789</p>
        </div>
        {/* Social Icons */}
        <div className="flex mt-6 space-x-4">
          <div className="p-3 bg-[#112240] rounded-full cursor-pointer hover:bg-[#64ffda] transition">🌐</div>
          <div className="p-3 bg-[#112240] rounded-full cursor-pointer hover:bg-[#64ffda] transition">📸</div>
          <div className="p-3 bg-[#112240] rounded-full cursor-pointer hover:bg-[#64ffda] transition">🔗</div>
        </div>
      </div>

      {/* Right Section (Form) */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={sendEmail}
        className="w-full md:w-1/2 bg-[#112240] p-8 rounded-lg shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="w-full p-3 mb-4 rounded bg-[#0a192f] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          className="w-full p-3 mb-4 rounded bg-[#0a192f] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Enter Your Subject"
          className="w-full p-3 mb-4 rounded bg-[#0a192f] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Enter Your Message"
          className="w-full p-3 mb-4 rounded bg-[#0a192f] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full py-3 text-lg font-semibold bg-[#64ffda] text-[#0a192f] rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-[#64ffda] hover:shadow-2xl"
        >
          Submit
        </button>
        {status && <p className="mt-4 text-center text-green-400">{status}</p>}
      </motion.form>
    </section>
  );
};

export default Contact;