import React, { useState } from "react";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbCloudComputing, TbDatabaseSearch, TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { MdOutlineSecurity } from "react-icons/md";
import Modal from "../Modal/Modal";

// Services Data
const ServicesData = [
  {
    id: 1,
    title: "Web Development",
    link: "#",
    icon: <TbWorldWww />,
    delay: 0.2,
    content:
      "We offer responsive web development using the latest technologies.",
    courses: [
      {
        id: 1,
        title: "Frontend Development",
        description: `Frontend development focuses on the visual elements of a website, including the user interface and user experience. Here are some popular online courses for frontend development:`,
        links: [
          {
            text: "Udemy",
            url: "https://www.udemy.com/topic/front-end-web-development/",
          },
          {
            text: "Coursera",
            url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
          },
          {
            text: "Udacity",
            url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011",
          },
        ],
      },
      {
        id: 2,
        title: "Backend Development",
        description: `Backend development focuses on the server-side logic of a website, including data storage, retrieval, and processing. Here are some popular online courses for backend development:`,
        links: [
          {
            text: "Udemy",
            url: "https://www.udemy.com/topic/back-end-web-development/",
          },
          {
            text: "Coursera",
            url: "https://www.coursera.org/professional-certificates/meta-back-end-developer",
          },
          {
            text: "PW Skills",
            url: "https://pwskills.com/course/backend-development-free/",
          },
          {
            text: "Codecademy",
            url: "https://www.codecademy.com/learn/paths/back-end-engineer-career-path",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Mobile Development",
    link: "#",
    icon: <CiMobile3 />,
    delay: 0.3,
    content: "Create seamless mobile applications for both Android and iOS.",
    courses: [
      {
        id: 1,
        title: "General Mobile Development",
        description: `Frontend development focuses on the visual elements of a website, including the user interface and user experience. Here are some popular online courses for frontend development:`,
        links: [
          {
            text: "Android Development",
            url: "https://developer.android.com/develop",
          },
          {
            text: "The Android Academy",
            url: "https://developer.android.com/courses",
          },
          {
            text: "Ray Wenderlich",
            url: "https://www.kodeco.com/library?category_ids%5B%5D=143&category_ids%5B%5D=148&category_ids%5B%5D=152&category_ids%5B%5D=181&category_ids%5B%5D=177&content_types%5B%5D=article&limit_count=12&sort_direction=desc&sort_order=popularity",
          },
        ],
      },
      {
        id: 2,
        title: "iOS Development",
        description: `Backend development focuses on the server-side logic of a website, including data storage, retrieval, and processing. Here are some popular online courses for backend development:`,
        links: [
          {
            text: "Apple Developer Documentation",
            url: "https://developer.apple.com/",
          },
          {
            text: "Swift Playgrounds",
            url: " https://developer.apple.com/swift-playgrounds/",
          },
          {
            text: "Stanford's iOS App Development Course",
            url: "https://github.com/riceset/Stanford-CS193p",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Software Development",
    link: "#",
    icon: <RiComputerLine />,
    delay: 0.4,
    content: "Custom software solutions tailored to your business needs.",
    courses: [
      {
        id: 1,
        title: "Full Stack Development",
        description:
          "Become proficient in both frontend and backend technologies.",
        links: [
          {
            text: "Coursera",
            url: "https://www.coursera.org/courses?query=full%20stack%20web%20development",
          },
          {
            text: "Udemy",
            url: "https://www.udemy.com/topic/full-stack-web-development/",
          },
          {
            text: "Scaler",
            url: "https://www.scaler.com/courses/full-stack-developer/",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Cloud Computing",
    link: "#",
    icon: <TbCloudComputing />,
    delay: 0.5,
    content:
      "Deploy and manage applications in cloud environments such as AWS, Azure, and Google Cloud.",
    courses: [
      {
        id: 1,
        title: "Free Resources",
        description:
          "Master AWS cloud solutions and services to become a certified architect.",
        links: [
          {
            text: "Google Cloud Platform Training",
            url: "https://cloud.google.com/training",
          },
          {
            text: "AWS Training & Certification",
            url: "https://www.aws.training/",
          },
          {
            text: "Coursera",
            url: "https://www.coursera.org/learn/aws-cloud-technical-essentials?utm_medium=sem&utm_source=gg&utm_campaign=b2c_india_aws-cloud-technical-essentials_aws_ftcof_learn_arte_aug-24_dr_sem_rsa_gads_lg-all&campaignid=21510089935&adgroupid=164762505266&device=c&keyword=cloud%20networking%20courses&matchtype=p&network=g&devicemodel=&adposition=&creativeid=707001407177&hide_mobile_promo&gad_source=1&gclid=Cj0KCQjwjNS3BhChARIsAOxBM6pLnVactOJudT68DSYUutqX1eYTmoJxY5SXPzlYHiUb35Q8EzQP5UAaAioeEALw_wcB",
          },
        ],
      },
      {
        id: 2,
        title: "Paid Resources",
        description:
          "Learn Google Cloud services and infrastructure to become a certified cloud professional.",
        links: [
          {
            text: "Udemy",
            url: "https://www.udemy.com/topic/cloud-computing/",
          },
          {
            text: "edX",
            url: "https://www.edx.org/learn/cloud-computing",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Cybersecurity",
    link: "#",
    icon: <MdOutlineSecurity />,
    delay: 0.6,
    content:
      "Protect systems and networks from cyber threats with advanced cybersecurity skills.",
    courses: [
      {
        id: 1,
        title: "Free Resources",
        description:
          "Learn how to ethically hack systems to find vulnerabilities and secure them.",
        links: [
          {
            text: "Cybrary",
            url: "https://www.cybrary.it/",
          },
          {
            text: "Hack The Box",
            url: "https://www.hackthebox.com/",
          },
          {
            text: "CISCO",
            url: "https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US",
          },
        ],
      },
      {
        id: 2,
        title: "Paid Resources",
        description:
          "Develop core security skills needed to protect networks and devices.",
        links: [
          {
            text: "Coursera",
            url: "https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst?utm_medium=sem&utm_source=gg&utm_campaign=b2c_india_ibm-cybersecurity-analyst_ibm_ftcof_professional-certificates_arte_june-24_dr_sem_rsa_gads_lg-all&campaignid=21353594783&adgroupid=162536250225&device=c&keyword=cyber%20security%20courses%20online&matchtype=p&network=g&devicemodel=&adposition=&creativeid=701434309109&hide_mobile_promo&gad_source=1&gclid=Cj0KCQjwjNS3BhChARIsAOxBM6quckUuSGdRD7fv2_uWIKAPphXgu_1mQXcO7yYk8kA6kQXx54yO1WMaAu4KEALw_wcB",
          },
          {
            text: "Udemy",
            url: "https://www.udemy.com/topic/cyber-security/",
          },
          {
            text: "edX",
            url: "https://www.edx.org/learn/cybersecurity",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Data Science and Machine Learning",
    link: "#",
    icon: <TbDatabaseSearch />,
    delay: 0.7,
    content:
      "Analyze data and build predictive models using machine learning techniques.",
    courses: [
      {
        id: 1,
        title: "Data Science",
        description:
          "Learn Python, data analysis, and visualization for data science.",
        links: [
          {
            text: "Datamites",
            url: "https://datamites.com/data-science-training/certified-data-scientist/?utm_source=google_ads&utm_medium=cpc&utm_campaign=gads_cpc_ind_cds&gad_source=1&gclid=Cj0KCQjwjNS3BhChARIsAOxBM6oEcvifOhjJV5HB63xfCSvisEa9oNOHw9e-M2ij2pgwzVJrGbovzWAaAvA4EALw_wcB",
          },
          {
            text: "Coursera",
            url: "https://www.coursera.org/learn/python-data-analysis",
          },
          {
            text: "HARVARD UNIVERSITY",
            url: "https://pll.harvard.edu/course/introduction-data-science-python",
          },
        ],
      },
      {
        id: 2,
        title: "Machine Learning",
        description:
          "Master machine learning concepts and build models using TensorFlow.",
        links: [
          {
            text: "Coursera",
            url: "https://www.coursera.org/learn/machine-learning",
          },
          {
            text: "Udemy",
            url: "https://www.udemy.com/topic/machine-learning/",
          },
        ],
      },
    ],
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

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState([]); // State for selected service's courses
  const [showCourses, setShowCourses] = useState(false); // To manage visibility of the courses section

  const toggleContent = (service) => {
    if (expandedService === service.id) {
      // Collapse if the same service is clicked again
      setExpandedService(null);
      setShowCourses(false);
    } else {
      // Expand and show courses for the new service
      setExpandedService(service.id);
      setSelectedCourses(service.courses); // Update selected courses
      setShowCourses(true); // Show the courses section
    }
  };

  return (
    <section className="bg-white">
      <Navbar />
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
          Services we provide
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-between p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl h-full"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3 flex-grow">
                {service.title}
              </h1>
              <button
                className="mt-auto px-4 py-2 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                onClick={() => toggleContent(service)}
              >
                {expandedService === service.id ? "Show less" : "Learn more"}
              </button>
            </motion.div>
          ))}
        </div>

        {/* New Section for Courses - Visible when "Learn more" is clicked */}
        {showCourses && selectedCourses.length > 0 && (
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-left pb-5">
              Courses for{" "}
              {
                ServicesData.find((service) => service.id === expandedService)
                  ?.title
              }
            </h2>
            {selectedCourses.map((course) => (
              <div
                key={course.id}
                className="mb-6 border p-4 rounded-md shadow-md"
              >
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <p className="text-gray-700">{course.description}</p>
                <div className="mt-2 space-y-2">
                  {course.links.map((link) => (
                    <div key={link.text} className="flex justify-start">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out px-4 py-2 rounded-md shadow-sm hover:shadow-lg"
                      >
                        {link.text}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Modal />
      <Footer />
    </section>
  );
};

export default Services;