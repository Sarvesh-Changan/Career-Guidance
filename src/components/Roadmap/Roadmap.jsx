import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FaCheckCircle, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Roadmap = () => {
  const [completedTopics, setCompletedTopics] = useState({});
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleCompletion = (courseIndex, topicIndex) => {
    setCompletedTopics(prev => ({
      ...prev,
      [courseIndex]: {
        ...prev[courseIndex],
        [topicIndex]: !prev[courseIndex]?.[topicIndex]
      }
    }));
  };

  const toggleSection = (index) => {
    setExpandedSection(prev => (prev === index ? null : index));
  };

  const markAllCompleted = (courseIndex) => {
    const allTopics = courses[courseIndex].topics;
    const updatedTopics = allTopics.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {});
    setCompletedTopics(prev => ({
      ...prev,
      [courseIndex]: updatedTopics
    }));
  };

  const courses = [
    {
      title: 'Web Development',
      description: 'Learn to build websites and web applications.',
      duration: '3 months',
      topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB'],
      resources: [
        { name: 'FreeCodeCamp: Responsive Web Design Certification', link: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/' },
        { name: 'Codecademy: Learn JavaScript', link: 'https://www.codecademy.com/learn/introduction-to-javascript' },
        { name: 'React Official Documentation', link: 'https://reactjs.org/docs/getting-started.html' },
      ],
    },
    {
      title: 'Data Science',
      description: 'Analyze data and build predictive models.',
      duration: '4 months',
      topics: ['Python', 'Pandas', 'NumPy', 'Machine Learning'],
      resources: [
        { name: 'Coursera: Data Science Specialization', link: 'https://www.coursera.org/specializations/jhu-data-science' },
        { name: 'Kaggle: Data Science Courses', link: 'https://www.kaggle.com/learn' },
        { name: 'Book: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow"', link: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/' },
      ],
    },
    {
      title: 'Mobile Development',
      description: 'Create mobile applications for iOS and Android.',
      duration: '3 months',
      topics: ['React Native', 'Flutter', 'Java', 'Swift'],
      resources: [
        { name: 'Udemy: The Complete React Native Course', link: 'https://www.udemy.com/course/the-complete-react-native-and-redux-course/' },
        { name: 'Flutter Official Documentation', link: 'https://flutter.dev/docs' },
        { name: 'Apple Developer: Swift Programming Language', link: 'https://developer.apple.com/swift/' },
      ],
    },
    {
      title: 'Cloud Computing',
      description: 'Understand cloud services and architecture.',
      duration: '3 months',
      topics: ['AWS', 'Azure', 'Google Cloud', 'Cloud Architecture'],
      resources: [
        { name: 'Coursera: Cloud Computing Specialization', link: 'https://www.coursera.org/specializations/cloud-computing' },
        { name: 'AWS Training and Certification', link: 'https://aws.amazon.com/training/' },
        { name: 'Google Cloud Skills Boost', link: 'https://cloud.google.com/training' },
      ],
    },
    {
      title: 'Cybersecurity',
      description: 'Learn to protect systems and networks from attacks.',
      duration: '4 months',
      topics: ['Network Security', 'Ethical Hacking', 'Penetration Testing'],
      resources: [
        { name: 'Cybrary: Cybersecurity Courses', link: 'https://www.cybrary.it/' },
        { name: 'CompTIA Security+ Certification', link: 'https://www.comptia.org/certifications/security' },
        { name: 'Book: "The Web Application Hacker\'s Handbook"', link: 'https://www.amazon.com/Web-Application-Hackers-Handbook-Exploiting/dp/1118026470' },
      ],
    },
    {
      title: 'Software Engineering',
      description: 'Master software development principles and practices.',
      duration: '4 months',
      topics: ['Software Development Life Cycle', 'Agile Methodologies', 'Design Patterns'],
      resources: [
        { name: 'Coursera: Software Engineering Specialization', link: 'https://www.coursera.org/specializations/software-engineering' },
        { name: 'Book: "Clean Code: A Handbook of Agile Software Craftsmanship"', link: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882' },
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-10">
        <h1 className="text-4xl font-extrabold text-center text-white mb-12">Interactive Course Roadmap</h1>
        <div className="max-w-4xl mx-auto p-4 grid gap-8">
          {courses.map((course, courseIndex) => (
            <div key={courseIndex} className="bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105">
              <div 
                className="flex justify-between items-center cursor-pointer border-b pb-3 mb-3"
                onClick={() => toggleSection(courseIndex)}
              >
                <h2 className="text-2xl font-bold text-gray-800">{course.title}</h2>
                {expandedSection === courseIndex ? <FaChevronUp className="text-indigo-500" /> : <FaChevronDown className="text-indigo-500" />}
              </div>
              
              {expandedSection === courseIndex && (
                <div className="transition-all duration-300">
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  <p className="text-gray-600 font-semibold mb-4">Duration: {course.duration}</p>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div 
                      className="bg-indigo-500 h-2.5 rounded-full" 
                      style={{ width: `${(completedTopics[courseIndex] ? Object.values(completedTopics[courseIndex]).filter(Boolean).length : 0) / course.topics.length * 100}%` }}
                    ></div>
                  </div>

                  {/* Mark All as Completed Button */}
                  <button 
                    onClick={() => markAllCompleted(courseIndex)} 
                    className="bg-indigo-500 text-white py-1 px-4 rounded-full mb-4 hover:bg-indigo-600 transition"
                  >
                    Mark All Topics as Completed
                  </button>
                  
                  {/* Expandable Topics */}
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-800">Topics Covered:</h3>
                    <ul className="list-disc ml-5 mb-4 space-y-2">
                      {course.topics.map((topic, topicIndex) => (
                        <li 
                          key={topicIndex} 
                          className={`text-gray-700 flex items-center cursor-pointer ${completedTopics[courseIndex]?.[topicIndex] ? 'line-through' : ''}`}
                          onClick={() => toggleCompletion(courseIndex, topicIndex)}
                        >
                          {completedTopics[courseIndex]?.[topicIndex] && (
                            <FaCheckCircle className="text-green-500 mr-2" />
                          )}
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Resource Links with External Link Icons */}
                  <h3 className="text-lg font-semibold text-gray-800">Resources:</h3>
                  <ul className="list-disc ml-5 space-y-2">
                    {course.resources.map((resource, resourceIndex) => (
                      <li key={resourceIndex} className="text-gray-700 flex items-center">
                        <a 
                          href={resource.link} // Actual URL here
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center hover:text-indigo-500 transition-colors"
                        >
                          {resource.name}
                          <FaExternalLinkAlt className="ml-1 text-sm" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Roadmap;
