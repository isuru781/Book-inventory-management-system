import React from 'react';
import './Home.css';

import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className="welcome-page">
      <div className='box'>
      <h1 style={{ color: "darkblue" }}>Welcome to Book Inventry System</h1>
      <Link to="/SimulationPage"> <button className="start-button"  >
      Start application  &#x2192;
      </button></Link> 
      </div>
    </div>
  );
}