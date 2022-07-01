import React  from 'react';
import "./App.css";
import { HiOutlineHome, HiUserGroup } from 'react-icons/hi';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link style={{ color: "white", textDecoration: "none" }} to="/">
                <div className="nav-logo" style={{ fontsize: "20px" }}> <img src="/media/fg-logo.png" alt="Grupo FG Logo" height="20" width="auto" /> </div>
            </Link>
            <ul className="nav-links">
                <Link
                    style={{
                        fontsize: "30px",
                        color: "white",
                        textDecoration: "none"
                    }}
                    to="/"
                >
                    <div className="nav-item">
                        <HiOutlineHome />
                        <li>Home</li>
                    </div>
                </Link>

                <Link
                    style={{
                        fontsize: "30px",
                        color: "white",
                        textDecoration: "none"
                    }}
                    to="/Trabajadores"
                >
                    <div className="nav-item">
                        <HiUserGroup />
                        <li>Trabajadores</li>
                    </div>
                </Link>
                
                <Link
                    style={{
                        fontsize: "30px",
                        color: "white",
                        textDecoration: "none"
                    }}
                    to="/Employees"
                >
                    <div className="nav-item">
                        <HiUserGroup />
                        <li>Radar</li>
                    </div>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;