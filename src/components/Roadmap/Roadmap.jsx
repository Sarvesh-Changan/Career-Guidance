import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Roadmap = () => {
  const courses = [
    {
      title: 'Web Development',
      description: 'Learn to build websites and web applications.',
      duration: '3 months',
      topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      resources: [
        'FreeCodeCamp: Responsive Web Design Certification',
        'Codecademy: Learn JavaScript',
        'React Official Documentation',
      ],
    },
    {
      title: 'Data Science',
      description: 'Analyze data and build predictive models.',
      duration: '4 months',
      topics: ['Python', 'Pandas', 'NumPy', 'Machine Learning'],
      resources: [
        'Coursera: Data Science Specialization',
        'Kaggle: Data Science Courses',
        'Book: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow"',
      ],
    },
    {
      title: 'Mobile Development',
      description: 'Create mobile applications for iOS and Android.',
      duration: '3 months',
      topics: ['React Native', 'Flutter', 'Java', 'Swift'],
      resources: [
        'Udemy: The Complete React Native Course',
        'Flutter Official Documentation',
        'Apple Developer: Swift Programming Language',
      ],
    },
    {
      title: 'Cloud Computing',
      description: 'Understand cloud services and architecture.',
      duration: '3 months',
      topics: ['AWS', 'Azure', 'Google Cloud', 'Cloud Architecture'],
      resources: [
        'Coursera: Cloud Computing Specialization',
        'AWS Training and Certification',
        'Google Cloud Skills Boost',
      ],
    },
    {
      title: 'Cybersecurity',
      description: 'Learn to protect systems and networks from attacks.',
      duration: '4 months',
      topics: ['Network Security', 'Ethical Hacking', 'Penetration Testing'],
      resources: [
        'Cybrary: Cybersecurity Courses',
        'CompTIA Security+ Certification',
        'Book: "The Web Application Hacker\'s Handbook"',
      ],
    },
    {
      title: 'Software Engineering',
      description: 'Master software development principles and practices.',
      duration: '4 months',
      topics: ['Software Development Life Cycle', 'Agile Methodologies', 'Design Patterns'],
      resources: [
        'Coursera: Software Engineering Specialization',
        'Book: "Clean Code: A Handbook of Agile Software Craftsmanship"',
        'MIT OpenCourseWare: Software Engineering',
      ],
    },
  ];
  
  
  return (
    <div>
      <Navbar/>
      <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Course Roadmap</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <p className="text-gray-600">Duration: {course.duration}</p>
            <h3 className="text-lg font-semibold mt-4">Topics Covered:</h3>
            <ul className="list-disc ml-5 mb-4">
              {course.topics.map((topic, idx) => (
                <li key={idx} className="text-gray-600">{topic}</li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold">Resources:</h3>
            <ul className="list-disc ml-5">
              {course.resources.map((resource, idx) => (
                <li key={idx} className="text-gray-600">{resource}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Roadmap