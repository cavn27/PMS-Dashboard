import React from 'react';
import RadarGraphBest from "../Charts/RadarGraphBest";
import RadarGraphPhone from "../Charts/RadarGraphPhone";

import BEDetail from "./BEDetail";
import E2Detail from "./E2Detail";
import E3Detail from "./E3Detail";
import E4Detail from "./E4Detail";
import E5Detail from "./E5Detail";
import "../App.css";

const Home = () => {
    return (
        <div className="Main-App">
            <BEDetail/>
            <E2Detail/>
            <E3Detail/>
            <E4Detail/>
            <E5Detail/>
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