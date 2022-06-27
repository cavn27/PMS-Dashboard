import React from 'react';
// import axios from 'axios';
// import Chart from 'react-apexcharts'
import AreaGraph from "./AreaGraph";
import LineGraphPhone from "./LineGraphPhone";
import RadarGraphBest from "./RadarGraphBest";
import RadarGraphPhone from "./RadarGraphPhone";
import CalendarDiv from "../Calendar"
import "../App.css";

const Home = () => {
    return (
        <div className="Main-App">
            <div className='Chart-container'>
                <AreaGraph />
                <div className='Right-Chart-container'>
                    <div className='Calendar-container'>
                        <CalendarDiv />
                    </div>
                    <RadarGraphBest />
                </div>
            </div>
            <div className='Chart-container-phone'>
                <LineGraphPhone />
                <RadarGraphPhone />
            </div>
        </div>
    )
  }
  
  export default Home;