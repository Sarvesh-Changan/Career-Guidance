import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Career Guide</h1>
            <p className="text-dark2">
              Career Guide is a dedicated platform for aspiring developers,
              offering essential career guidance to navigate your professional
              journey. From personalized roadmaps to skill-building resources,
              we provide a comprehensive learning experience designed to help
              you excel in coding, complete impactful projects, and successfully
              launch your tech career.
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Courses</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    <a
                      href="/service"
                      className="cursor-pointer hover:text-secondary duration-200"
                    >
                      Web Development
                    </a>
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    <a
                      href="/service"
                      className="cursor-pointer hover:text-secondary duration-200"
                    >
                      Software Development
                    </a>
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    <a
                      href="/service"
                      className="cursor-pointer hover:text-secondary duration-200"
                    >
                      Apps Development
                    </a>
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    <a
                      href="/service"
                      className="cursor-pointer hover:text-secondary duration-200"
                    >
                      Data Science
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li>
                    <a
                      href="/"
                      className="cursor-pointer hover:text-secondary duration-200"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/service"
                      className="cursor-pointer hover:text-secondary duration-200"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="cursor-pointer hover:text-secondary duration-200"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/roadmap"
                      className="cursor-pointer hover:text-secondary duration-200"
                    >
                      Roadmap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div>
            {/* social icons */}
            <div className="flex space-x-6 py-3">
              <a
                href="https://www.instagram.com/changansarvesh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a
                href="https://www.linkedin.com/in/sarvesh-changan-600842311/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a
                href="https://github.com/Sarvesh-Changan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
