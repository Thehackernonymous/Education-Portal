import React, { useEffect, useState } from "react";
import "./Carousel.css";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "https://www.education.gov.in/sites/education.gov.in/themes/nexus/images/slides/ppc2024.jpg",
    "https://www.education.gov.in/sites/education.gov.in/themes/nexus/images/slides/know-school-banner.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/bd/Ministry_of_Education_India.svg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${activeIndex === index ? "active" : ""}`}>
            <img src={image} className="images" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
        onClick={handlePrevClick}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
        onClick={handleNextClick}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
