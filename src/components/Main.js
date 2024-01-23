import React, {useState} from 'react';
import Sidebar from './Sidebar';
// import Page from './Page';
import Education from './Education';
import './Main.css';
import Page from './Page';
import { Link } from 'react-router-dom';

const Main = () => {
  const [selectedState, setSelectedState] = useState(null);
  return (
    <div className='main'>
      <div className='sidebar'>
        <Sidebar setSelectedState={setSelectedState} />
      </div>
      {/* <div className='content'>
        <Education selectedState={selectedState} />
      </div> */}
      <div className='content'>
        <Page selectedState={selectedState} />
      </div>
    </div>
  );
};

export default Main;