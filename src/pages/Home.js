import React from 'react';
// import axios from 'axios';
// import Chart from 'react-apexcharts'
import AreaGraph from "../Charts/AreaGraph";
import LineGraphPhone from "../Charts/LineGraphPhone";
import RadarGraphBest from "../Charts/RadarGraphBest";
import RadarGraphPhone from "../Charts/RadarGraphPhone";
import EmployeesCard from "./EmployeesCard"

import { HiExternalLink } from 'react-icons/hi';

import "../App.css";

const Home = () => {
    return (
        <div className="Main-App">
            <div className='Chart-container'>
                <AreaGraph />
                <div className='Right-Chart-container'>

                    <div className='Best-employee-label'>
                        <p> Mejor Trabajador <span role="img" aria-label="celebrate"> 🎉 </span> </p>
                    </div>

                    <div className="Best-employee">
                        <div className='r-graph'>
                            <RadarGraphBest />
                        </div>
                        <div className="be-text">
                            <div className="be-container">
                                <a href="/Employees" className="best-employee-div">
                                    <p> Abrir <HiExternalLink/> </p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="Employees-list">
                        <EmployeesCard />                        
                    </div>
                    
                </div>
            </div>
            <div className='Chart-container-phone'>
                <LineGraphPhone />

                <div className="Best-employee">

                    <div className='Best-employee-label'>
                        <p> Mejor Trabajador <span role="img" aria-label="celebrate"> 🎉 </span> </p>
                    </div>

                    <RadarGraphPhone />
                    <div className="be-text">
                        <div className="be-container">
                            <a href="/Employees" className="best-employee-div">
                                    <p> Abrir <HiExternalLink/> </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Home;