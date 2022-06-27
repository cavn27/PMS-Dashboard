import React from 'react';
// import axios from 'axios';
// import Chart from 'react-apexcharts'
import LineGraph from "./LineGraph";
import RadarGraph from "./RadarGraph";
import "../App.css";

const Home = () => {
    return (
      <div className='Chart-container'>
        <LineGraph />
        <RadarGraph />
      </div>
    )
  }
  
  export default Home;