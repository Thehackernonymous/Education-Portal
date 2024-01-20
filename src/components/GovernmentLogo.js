import React from 'react';

const GovernmentLogo = ({ imageUrl, website }) => {
  const handleLogoClick = () => {
    window.open(website, '_blank');
  };

  return (
    <div className="card text-bg-dark" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
      <img
        src={imageUrl}
        className="card-img"
        alt="Government Logo"
        style={{ height: 400 }}
      />
      <div className="card-img-overlay">
      </div>
    </div>
  );
};

export default GovernmentLogo;
