import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Media from './components/Media';
import Main from './components/Main';
import Carousel from './components/Carousel';
import Education from './components/Education';
import UniversityDetails from './components/States/UniversityDetails';
import Page from './components/Page';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Education />} />
          <Route path="/Media" element={<Media/>} />
        </Routes>
        <Carousel />
        <Main />
        <Footer />
        <UniversityDetails />
      </div>
    </Router>
  );
}

export default App;
