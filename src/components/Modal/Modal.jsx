import React, { useState } from "react";
import FrontendPopup from "./ShowModal";
import {
  DEVELOPER_TITLE,
  DATA_SCIENCE_TITLE,
  CLOUD_COMPUTING_TITLE,
  CYBERSECURITY_TITLE,
  NETWORK_SYSTEM_ADMINISTRATION_TITLE,
} from "../../constants";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [section, setSection] = useState("developer");

  const togglePopup = (id) => {
    setSelectedRole(id);
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-4 md:px-10">
      <h1 className="container pb-2 text-purple-700 font-mono text-2xl md:text-4xl">
        Developer
      </h1>
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {DEVELOPER_TITLE.map((key, index) => (
          <button
            key={index}
            onClick={() => {
              setSection("developer");
              togglePopup(index + 1);
            }}
            className="bg-blue-500 w-full text-white text-lg md:text-2xl py-3 rounded-lg"
          >
            {key.title}
          </button>
        ))}
      </div>

      <h1 className="container pb-2 text-purple-700 font-mono text-2xl md:text-4xl mt-6">
        Data Science
      </h1>
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {DATA_SCIENCE_TITLE.map((key, index) => (
          <button
            key={index}
            onClick={() => {
              setSection("data_science");
              togglePopup(index + 6);
            }}
            className="bg-blue-500 w-full text-white text-lg md:text-2xl py-3 rounded-lg"
          >
            {key.title}
          </button>
        ))}
      </div>

      <h1 className="container pb-2 text-purple-700 font-mono text-2xl md:text-4xl mt-6">
        Cloud Computing
      </h1>
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {CLOUD_COMPUTING_TITLE.map((key, index) => (
          <button
            key={index}
            onClick={() => {
              setSection("cloud_computing");
              togglePopup(index + 11);
            }}
            className="bg-blue-500 w-full text-white text-lg md:text-2xl py-3 rounded-lg"
          >
            {key.title}
          </button>
        ))}
      </div>

      {/* Added Cybersecurity Section */}
      <h1 className="container pb-2 text-purple-700 font-mono text-2xl md:text-4xl mt-6">
        Cybersecurity
      </h1>
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {CYBERSECURITY_TITLE.map((key, index) => (
          <button
            key={index}
            onClick={() => {
              setSection("cybersecurity");
              togglePopup(index + 14);
            }} // Adjusted id starting from 14 for cybersecurity
            className="bg-blue-500 w-full text-white text-lg md:text-2xl py-3 rounded-lg"
          >
            {key.title}
          </button>
        ))}
      </div>

      <h1 className="container pb-2 text-purple-700 font-mono text-2xl md:text-4xl mt-6">
        Network & System Administration
      </h1>
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {NETWORK_SYSTEM_ADMINISTRATION_TITLE.map((key, index) => (
          <button
            key={index}
            onClick={() => {
              setSection("network_system_administration");
              togglePopup(index + 19);
            }} // Adjusted id starting from 19 for Network & System Administration
            className="bg-blue-500 w-full text-white text-lg md:text-2xl py-3 rounded-lg"
          >
            {key.title}
          </button>
        ))}
      </div>

      {isOpen && (
        <FrontendPopup
          closeModal={() => setIsOpen(false)}
          selectedRole={selectedRole}
          section={section}
        />
      )}
    </div>
  );
};

export default Modal;
