import React  from 'react';
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link style={{ color: "white", textDecoration: "none" }} to="/">
                <div style={{ fontsize: "30px" }}><span>X</span></div>
            </Link>
            <ul className="nav-links">
                <Link
                    style={{
                        color: "white",
                        textDecoration: "none",
                        marginTop: "10px",
                        marginRight: "50px",
                    }}
                    to="/"
                >
                    <li>Home</li>
                </Link>

                <Link
                    style={{
                        color: "white",
                        textDecoration: "none",
                        marginTop: "10px",
                        marginRight: "50px",
                    }}
                    to="/DonutGraph"
                >
                    <li>Donut</li>
                </Link>

                <Link
                    style={{
                        color: "white",
                        textDecoration: "none",
                        marginTop: "10px",
                        //marginRight: "50px",
                    }}
                    to="/RadarGraph"
                >
                    <li>Radar</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;