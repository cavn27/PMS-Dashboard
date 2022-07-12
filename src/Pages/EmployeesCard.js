import React from 'react';
import { Link } from "react-router-dom";

import BestEmployee from './BestEmployee';
import Employee2 from './Employee2';
import Employee3 from './Employee3';
import Employee4 from './Employee4';
import Employee5 from './Employee5';

import BEDetail from "./BEDetail";
import E2Detail from "./E2Detail";
import E3Detail from "./E3Detail";
import E4Detail from "./E4Detail";
import E5Detail from "./E5Detail";

import "../App.css";

function EmployeesCard () {

    return (
        <React.Fragment>
            <div className="Chart" style={{border:'2px solid #eceae8'}}>
                <p className="be-title"> <span role="img" aria-label="celebrate"> 👥 </span> Trabajadores </p>
                    <ul className="employee-nav-links">
                        <Link
                            style={{
                                fontsize: "30px",
                                textDecoration: "none"
                            }}
                            to="/BestEmployeeTab"
                        >
                            <div className="employee-nav-item">
                                <li> <BestEmployee/> <BEDetail/> </li>
                            </div>
                        </Link>

                        <Link
                            style={{
                                fontsize: "30px",
                                textDecoration: "none"
                            }}
                            to="/EmployeeTab2"
                        >
                            <div className="employee-nav-item">
                                <li> <Employee2/> <E2Detail/> </li>
                            </div>
                        </Link>
                        
                        <Link
                            style={{
                                fontsize: "30px",
                                textDecoration: "none"
                            }}
                            to="/EmployeeTab3"
                        >
                            <div className="employee-nav-item">
                                <li> <Employee3/> <E3Detail/> </li>
                            </div>
                        </Link>
                        
                        <Link
                            style={{
                                fontsize: "30px",
                                textDecoration: "none"
                            }}
                            to="/EmployeeTab4"
                        >
                            <div className="employee-nav-item">
                                <li> <Employee4/> <E4Detail/> </li>
                            </div>
                        </Link>
                        
                        <Link
                            style={{
                                fontsize: "30px",
                                textDecoration: "none"
                            }}
                            to="/EmployeeTab5"
                        >
                            <div className="employee-nav-item">
                                <li> <Employee5/> <E5Detail/> </li>
                            </div>
                        </Link>
                    </ul>
            </div>
        </React.Fragment>
    );
}

export default EmployeesCard;