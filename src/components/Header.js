import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ setSearchQuery, openMediaModal, states }) => {
  const [selectedState, setSelectedState] = useState(''); 

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Government_of_India_logo.svg"
          alt="Government of India"
          style={logoStyle}
        />
       <nav className="nav">
  <ul className="nav-list">
    <li className="nav-item">
      <a href="/education-portal">Home</a>
    </li>
    <li className="nav-item media-btn">
      <a href="/education-portal/Media">Media Section</a>
      
    </li>
  </ul>
</nav>
      </div>
    </header>
  );
};

const headerStyle = {
  backgroundColor: 'grey', 
  padding: '4px 0',
  color: 'white',
  height: '90px'
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
};

const logoStyle = {
  height: '60px', 
};

const searchFormStyle = {
  marginLeft: 'auto',
};

const searchInputStyle = {
  border: '1px solid #f8f9fa', 
  padding: '0.5rem',
};

export default Header;
