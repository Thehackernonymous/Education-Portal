// UniversityCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const UniversityCard = ({ university, onClick }) => {
  return (
    <Link to={university.website} target="_blank" rel="noopener noreferrer">
      <div className="card" onClick={() => onClick(university)}>
        <img src={university.logo} alt={`${university.name} Logo`} />
        <h3>{university.name}</h3>
        <p>{university.location}</p>
      </div>
    </Link>
  );
};

export default UniversityCard;
