import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8" id="contact">
      <div className="max-w-[1200px] mx-auto text-center px-4">
        <p className="text-2xl sm:text-4xl font-bold mb-6">Contact Me</p>
        <div className="flex justify-center flex-wrap gap-6 sm:gap-12 text-3xl sm:text-5xl">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kaiveni-tom-dagcuta-51968330a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/KaiSuuWii"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          {/* Email */}
          <a
            href="mailto:kaivenitomd@gmail.com"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
