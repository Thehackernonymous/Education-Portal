// UniversityDetails.js
import React from 'react';
import "./UniversityDetails.css";

const UniversityDetails = ({ selectedUniversity, onClose }) => {
  // Check if selectedUniversity is defined before accessing its properties
  if (!selectedUniversity) {
    return null; // or any other fallback UI if needed
  }

  const { name, details } = selectedUniversity;

  return (
    <div className="details-overlay">
      <div className="details-container">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h2>{name}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default UniversityDetails;
