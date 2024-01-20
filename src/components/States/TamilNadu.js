import React, { useState } from 'react';
import UniversityCard from './UniversityCard';
import UniversityDetails from './UniversityDetails';
import './state.css';

const universitiesData = [
  {
    name: '',
    location: '',
    logo: '',
    details: '',
    website: '',
  },
  {
    name: '',
    location: '',
    details: '',
    logo: '',
    website: '', 
  },
];

function TamilNadu() {
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  const handleCardClick = (university) => {
    setSelectedUniversity(university);
  };

  const handleDetailsClose = () => {
    setSelectedUniversity(null);
  };

  return (
    <div className="App">
      <h1>TamilNadu Universities</h1>
      <div className="university-container">
        {universitiesData.map((university, index) => (
          <UniversityCard
            key={index}
            university={university}
            onClick={handleCardClick}
          />
        ))}
      </div>
      {selectedUniversity && (
        <UniversityDetails
          selectedUniversity={selectedUniversity}
          onClose={handleDetailsClose}
        />
      )}
    </div>
  );
}

export default TamilNadu;
