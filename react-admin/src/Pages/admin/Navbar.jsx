import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
require("../../assets/css/icons.min.css");
require("../../assets/css/app.min.css");

export default class Navbar extends Component {

    
    render() {

        return (

            <React.Fragment>

<div className="leftside-menu">
                <a href="index.html" className="logo text-center logo-light">
                    <span className="logo-lg">
                        <img src="../../assets/images/logo.png" alt="" height="16" />
                    </span>
                    <span className="logo-sm">
                        <img src="assets/images/logo_sm.png" alt="" height="16" />
                    </span>
                </a>

                <a href="index.html" className="logo text-center logo-dark">
                    <span className="logo-lg">
                        <img src="assets/images/logo-dark.png" alt="" height="16" />
                    </span>
                    <span className="logo-sm">
                        <img src="assets/images/logo_sm_dark.png" alt="" height="16" />
                    </span>
                </a>
    
                <div className="h-100" id="leftside-menu-container" data-simplebar>

                    <ul className="side-nav">
                        <li className="side-nav-item">
                            <Link to="/admin/dashboard" className="side-nav-link">
                                <DashboardIcon />
                                <span> Dashboard </span>
                            </Link>
                        </li>

                        <li className="side-nav-item">
                            <Link to="/admin/category" className="side-nav-link">
                                <DashboardIcon />
                                <span> Category </span>
                            </Link>
                        </li>

                        <li className="side-nav-item">
                            <Link to="/admin/course" className="side-nav-link">
                                <DashboardIcon />
                                <span> Course </span>
                            </Link>
                        </li>

                        <li className="side-nav-item">
                            <Link to="/admin/users" className="side-nav-link">
                                <DashboardIcon />
                                <span> Users </span>
                            </Link>
                        </li>
                    </ul>

                    <div className="clearfix"></div>

                </div>

            </div>

            </React.Fragment>

        )
    }

}