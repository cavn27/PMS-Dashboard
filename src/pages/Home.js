import React from 'react';
// import axios from 'axios';
// import Chart from 'react-apexcharts'
import AreaGraph from "./AreaGraph";
import LineGraphPhone from "./LineGraphPhone";
import RadarGraph from "./RadarGraph";
import RadarGraphPhone from "./RadarGraphPhone";
import "../App.css";

const Home = () => {
    return (
        <div className="Main-App">
            <div className='Chart-container'>
                <AreaGraph />
                <RadarGraph />
            </div>
            <div className='Chart-container-phone'>
                <LineGraphPhone />
                <RadarGraphPhone />
            </div>
        </div>
    )
  }
  
  export default Home;