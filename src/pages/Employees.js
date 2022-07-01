import "../App.css";

import React, { Component, Fragment } from "react";
import { HashRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import ReactDOM from 'react-dom';

function HelloBanner () {
  return (
    <div id="banner_hello" className="banner">
      <span>
        Hello Banner is currently displayed. We are currently in path "/hello"
      </span>
    </div>
  );
};

function WorldBanner () {
  return (
    <div id="banner_world" className="banner">
      <span>
        Hello Banner is currently displayed. We are currently in path "/world"
      </span>
    </div>
  );
};

class Employees extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="div_app_container" className="app-container">
        <div id="div_nav" className="nav-bar">
          <span>Navigation bar</span>
          <Link to="/hello">
            <span>Link to /hello</span>
          </Link>
          <Link to="/world">
            <span>Link to /world</span>
          </Link>
          <Link to="/clearlyinvalidpath">
            <span>Link to a clearly invalid path.</span>
          </Link>
        </div>
        <div id="main_container" className="main-container">
          <span>Main Container</span>
          <Routes>
            <Route exact path="/">
              <div>
                <span>Default container. We are in root path</span>
              </div>
            </Route>
            <Route path="/hello" component={HelloBanner} />
            <Route path="/world">
              <WorldBanner />
            </Route>
            <Navigate to="/" />
          </Routes>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <Employees />
  </HashRouter>,
  document.getElementById("app")
);

export default Employees;