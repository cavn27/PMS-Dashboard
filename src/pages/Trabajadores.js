import React from 'react';
import RadarGraphBest from "./RadarGraphBest";
import RadarGraphPhone from "./RadarGraphPhone";

import "../App.css";

const Home = () => {
    return (
        <div className="Main-App">
            <div className='Chart-container'>
                <RadarGraphBest />
            </div>
            <div className='Chart-container-phone'>
                <RadarGraphPhone />
            </div>
        </div>
    )
  }
  
  export default Home;