import React from 'react';
// import axios from 'axios';
// import Chart from 'react-apexcharts'
import AreaGraph from "./AreaGraph";
import LineGraphPhone from "./LineGraphPhone";
import RadarGraphBest from "./RadarGraphBest";
import RadarGraphPhone from "./RadarGraphPhone";
import CalendarDiv from "../Calendar"

import Prueba1 from './Prueba1.js';
import "../App.css";

const Home = () => {
    return (
        <div className="Main-App">
            <div className='Chart-container'>
                <AreaGraph />
                <div className='Right-Chart-container'>

                    <div className="Best-employee">
                        <div className='r-graph'>
                            <RadarGraphBest />
                        </div>
                        <div className="be-text"> 
                            <Prueba1 /> 
                        </div>
                    </div>

                    <div className='Calendar-container'>
                        <CalendarDiv />
                    </div>
                    
                </div>
            </div>
            <div className='Chart-container-phone'>
                <LineGraphPhone />

                <div className="Best-employee">
                    <RadarGraphPhone />
                    <div className="be-text"> 
                        <Prueba1 /> 
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Home;