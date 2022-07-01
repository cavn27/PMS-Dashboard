import React from 'react';
import Nav from "./Nav";
import Home from "./pages/Home";
import Trabajadores from "./pages/Trabajadores";
import RadarGraph from "./pages/RadarGraph";
import Employees from "./pages/Employees";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

const App = () => {
  return (
    <Router>
        <Nav/>
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/Trabajadores' element={<Trabajadores/>} />
            <Route path='/RadarGraph' element={<RadarGraph/>} />
            <Route path='/Employees' element={<Employees/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;