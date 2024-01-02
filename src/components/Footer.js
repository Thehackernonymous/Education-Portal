import React from 'react';
import './Footer.css';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FaInstagram, FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa';

// Footer component
const Footer = () => {
  return (
    <section class="footer">
    <div class="footer-row">
      <div class="footer-col">
        <h4>Info</h4>
        <ul class="links">
          <li><a href="/education-page">Education</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Info.</h4>
        <p>
          This is Education Portal of India. 
        </p>
          <div class="icons">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://www.gmail.com/">
          <i class="far fa-envelope"></i>
        </a>
          <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i>
          </a>
        </div>
    </div>
    <div class="footer-text">
    <p>© Created by Rahul Jaiswal</p>
    </div>
  </div>
  </section>
    // <footer className="bg-dark text-white text-center py-3">
    //   <Container>
    //     <Row>
    //       <Col>
    //         <a href="#" target="_blank" rel="noopener noreferrer" className="text-white mx-2"><FaInstagram /></a>
    //         <a href="#" target="_blank" rel="noopener noreferrer" className="text-white mx-2"><FaFacebook /></a>
    //         <a href="#" target="_blank" rel="noopener noreferrer" className="text-white mx-2"><FaGithub /></a>
    //         <a href="#" target="_blank" rel="noopener noreferrer" className="text-white mx-2"><FaYoutube /></a>
    //       </Col>
    //     </Row>
    //   </Container>
    // </footer>
  );
};

export default Footer;