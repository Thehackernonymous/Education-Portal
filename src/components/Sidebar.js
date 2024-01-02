import React, { useState } from 'react';
import './Main.css';

const Sidebar = ({ setSelectedState }) => {
    const [searchQuery, setSearchQuery] = useState('');
    
    const states = [
        { id:1, name: 'Andhra Pradesh' },
        { id:2, name: 'Arunachal Pradesh' },
        { id:3, name: 'Assam' },
        { id:4, name: 'Bihar' },
        { id:5, name: 'Chattisgarh' },
        { id:6, name: 'Goa' },
        { id:7, name: 'Gujarat' },
        { id:8, name: 'Haryana' },
        { id:9, name: 'Himachal Pradesh' },
        { id:10, name: 'Jharkhand' },
        { id:11, name: 'Karnataka' },
        { id:12, name: 'Kerala' },
        { id:13, name: 'Madhya Pradesh' },
        { id:14, name: 'Maharashtra' },
        { id:15, name: 'Manipur' },
        { id:16, name: 'Meghalaya' },
        { id:17, name: 'Mizoram' },
        { id:18, name: 'Nagaland' },
        { id:19, name: 'Odisha' },
        { id:20, name: 'Punjab' },
        { id:21, name: 'Rajasthan' },
        { id:22, name: 'Sikkim' },
        { id:23, name: 'Tamil Nadu' },
        { id:24, name: 'Telangana' },
        { id:25, name: 'Tripura' },
        { id:26, name: 'Uttarakhand' },
        { id:27, name: 'Uttar Pradesh' },
        { id:28, name: 'West Bengal' }

    ];

    const filteredStates = states.filter((state) =>
    state.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const showStateInfo = (state) => {
    setSelectedState(state);
    // Implement the logic to display state information
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <span style={{ margin: '0 20px' }}>|</span>
            Indian States
          </a>
        </div>
      </nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search states..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="state-list">
        {filteredStates.map((state) => (
          <div key={state.id} className="state-item" onClick={() => showStateInfo(state)}>
            <h2>{state.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};
export default Sidebar;