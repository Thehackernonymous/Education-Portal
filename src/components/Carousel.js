import React from "react";
import './Carousel.css';

function Carousel() {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ministry_of_Education_India.svg/800px-Ministry_of_Education_India.svg.png" className="d-block w-100" style={{ height: '500px' }} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.education.gov.in/sites/education.gov.in/themes/nexus/images/slides/ppc2024.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.education.gov.in/sites/education.gov.in/themes/nexus/images/slides/know-school-banner.jpg" className="d-block w-100"  alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default Carousel;