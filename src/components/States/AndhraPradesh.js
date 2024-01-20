import React, { useState } from 'react';
import UniversityCard from './UniversityCard';
import UniversityDetails from './UniversityDetails';
import './state.css';

const universitiesData = [
  {
    name: 'Andhra University',
    location: 'Vishakhapatnam, Andhra Pradesh',
    logo: 'https://lh3.googleusercontent.com/p/AF1QipMDJyxJFr7yWZbRRL7CdJDz512EuLnDwxXy6sDr=s680-w680-h510',
    details: 'Andhra University is a public university located in Visakhapatnam, Andhra Pradesh, India. It was established in 1926.',
    website: 'https://andhrauniversity.edu.in',
  },
  {
    name: 'Andhra University College of Engineering',
    location: 'Vishakhapatnam, Andhra Pradesh',
    details: 'Andhra University College of Engineering, also known as AU College of Engineering, is an autonomous college and extension campus of the Andhra University located at Visakhapatnam, India. It is the first Indian institution to have a Department of Chemical Engineering.',
    logo: 'https://lh3.googleusercontent.com/p/AF1QipOLQ5T0nN7rkHvWadht2ixj9U_CPDhYXfawpq6R=s680-w680-h510',
    website: 'https://auengg.ac.in', 
  },
];

function AndhraPradesh() {
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  const handleCardClick = (university) => {
    setSelectedUniversity(university);
  };

  const handleDetailsClose = () => {
    setSelectedUniversity(null);
  };

  return (
    <div className="App">
      <h1>Andhra Pradesh Universities</h1>
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

export default AndhraPradesh;
