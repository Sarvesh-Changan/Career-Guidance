import React from 'react';
import { CLOUD_COMPUTING, Data_Scientist, DEVELOPER, CYBERSECURITY, NETWORK_SYSTEM_ADMINISTRATION } from '../../constants';

// Main FrontendPopup Component
const FrontendPopup = ({ closeModal, selectedRole, section }) => {
  const data = section === 'developer' 
    ? DEVELOPER 
    : section === 'data_science' 
    ? Data_Scientist 
    : section === 'cloud_computing' 
    ? CLOUD_COMPUTING 
    : section === 'cybersecurity' 
    ? CYBERSECURITY 
    : NETWORK_SYSTEM_ADMINISTRATION; // Added NETWORK_SYSTEM_ADMINISTRATION section

  const role = data.find((dev) => dev.id === selectedRole);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="popup fixed top-0 left-0 w-full h-full z-40 flex items-center justify-center bg-gray-800 bg-opacity-70"
      onClick={handleOverlayClick}
    >
      <div className="frontend-container bg-gray-900 text-white rounded-xl p-6 w-full max-w-md">
        <div className="close-btn text-right text-3xl cursor-pointer" onClick={closeModal}>
          &times;
        </div>
        {role && (
          <div className="content">
            <div className="frontend-heading">
              <h1 className="text-center text-2xl">{role.heading}</h1>
            </div>
            <div className="frontend-subheading mt-6">
              <h2 className="text-xl">{role.language}</h2>
              <div className="languages flex space-x-4">
                {role.languages.map((lang, index) => (
                  <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-lg font-medium text-purple-700">
                    {lang}
                  </span>
                ))}
              </div>
              <h2 className="text-xl mt-4">Frameworks and Libraries</h2>
              <div className="libraries flex space-x-4">
                {role.frameworks.map((frame, index) => (
                  <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-lg font-medium text-purple-700">
                    {frame}
                  </span>
                ))}
              </div>
              <h2 className="text-xl mt-4">{role.skill}</h2>
              <div className="skills">
                <ul className="list-disc ml-10">
                  {role.skills.map((sk, index) => (
                    <li key={index} className="mr-2 mt-4 rounded px-2 py-1 text-lg font-medium">
                      {sk}
                    </li>
                  ))}
                </ul>
              </div>
              <h2 className="text-xl mt-4">{role.eligibility}</h2>
              <div className="eligibility">
                <p>{role.criteria}</p>
              </div>
              <h2 className="text-xl mt-4">{role.ind}</h2>
              <div className="avg-salary-ind">
                <p>{role.rupees}</p>
              </div>
              <h2 className="text-xl mt-4">{role.usa}</h2>
              <div className="avg-salary-us">
                <p>{role.dollar}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FrontendPopup;
