import React, { useState } from "react";
import { FaBook, FaMapSigns, FaChalkboardTeacher } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Importing for navigation links
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// Services Data
const ServicesData = [
  {
    id: 1,
    title: "Courses",
    icon: <FaBook />,
    delay: 0.2,
    description:
      "We offer a variety of courses tailored to different career paths, helping you build the skills you need for success.",
  },
  {
    id: 2,
    title: "Career Guidance",
    icon: <FaChalkboardTeacher />,
    delay: 0.3,
    description:
      "Our career guidance services help you identify the best career paths based on your interests and strengths.",
  },
  {
    id: 3,
    title: "Roadmap",
    icon: <FaMapSigns />,
    delay: 0.4,
    description:
      "We provide clear and structured roadmaps for your career journey, outlining the skills and milestones to achieve your goals.",
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const About = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleContent = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section className="bg-gray-50">
      <Navbar />
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">About Us</h1>
        <p className="text-lg text-gray-600 pb-10">
          At our Career Guidance platform, we help individuals navigate their
          professional journeys with personalized guidance, expert resources,
          and structured roadmaps tailored to a variety of career paths.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 duration-300 hover:shadow-xl"
            >
              <div className="text-4xl mb-4 text-blue-600">{service.icon}</div>
              <h1 className="text-2xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h1>
              <p className="text-gray-600">
                {expandedService === service.id ? service.description : ""}
              </p>
              <button
                className="mt-4 text-blue-500 font-semibold hover:bg-blue-100 px-4 py-2 rounded transition-all duration-300"
                onClick={() => toggleContent(service.id)}
              >
                {expandedService === service.id ? "Show less" : "Learn more"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;