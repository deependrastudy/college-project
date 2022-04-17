import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
require("../../assets/css/icons.min.css");
require("../../assets/css/app.min.css");

export default class Header extends Component {
    
    state = {
        modal: false
     };

     componentDidMount(){
 
    }

    render() {
        return (

            <>
                <div className="navbar-custom">
                        <button className="button-menu-mobile open-left">
                            <i className="mdi mdi-menu"></i>
                        </button>
                        <div className="app-search dropdown d-none d-lg-block">
                            <form>
                                <div className="input-group">
                                    <input type="text" className="form-control dropdown-toggle"  placeholder="Search..." id="top-search" />
                                    <span className="mdi mdi-magnify search-icon"></span>
                                    <button className="input-group-text btn-primary" type="submit">Search</button>
                                </div>
                            </form>

                            <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
                                <div className="dropdown-header noti-title">
                                    <h5 className="text-overflow mb-2">Found <span className="text-danger">17</span> results</h5>
                                </div>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <i className="uil-notes font-16 me-1"></i>
                                    <span>Analytics Report</span>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <i className="uil-life-ring font-16 me-1"></i>
                                    <span>How can I help you?</span>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <i className="uil-cog font-16 me-1"></i>
                                    <span>User profile settings</span>
                                </a>

                                <div className="dropdown-header noti-title">
                                    <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                                </div>

                                <div className="notification-list">
                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <div className="d-flex">
                                            <img className="d-flex me-2 rounded-circle" src="assets/images/users/avatar-2.jpg" alt="Generic placeholder image" height="32" />
                                            <div className="w-100">
                                                <h5 className="m-0 font-14">Erwin Brown</h5>
                                                <span className="font-12 mb-0">UI Designer</span>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <div className="d-flex">
                                            <img className="d-flex me-2 rounded-circle" src="assets/images/users/avatar-5.jpg" alt="Generic placeholder image" height="32" />
                                            <div className="w-100">
                                                <h5 className="m-0 font-14">Jacob Deo</h5>
                                                <span className="font-12 mb-0">Developer</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        )
    }

}