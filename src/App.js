import React from 'react';
import Nav from "./Nav";
import Home from "./pages/Home";
import DonutGraph from "./pages/DonutGraph";
import RadarGraph from "./pages/RadarGraph";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="Main-App">
        <Nav/>
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/DonutGraph' element={<DonutGraph/>} />
            <Route path='/RadarGraph' element={<RadarGraph/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;