import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
require("../../assets/css/icons.min.css");
require("../../assets/css/app.min.css");
export default class Dashboard extends Component {
    state = {
       modal: false
    };
    toggle() {
    this.setState({
        modal: !this.state.modal
    });
    }
    componentDidMount(){
    }
    render() {
        return (
            <React.Fragment>
                <div className="wrapper">
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
                    </ul>
                    <div className="clearfix"></div>

                </div>

            </div>

            <div className="content-page">
                <div className="content">
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
                    
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box">
                                    <div className="page-title-right">
                                        <button className='btn btn-info btn-sm' onClick={()=>this.setState({modal:true})}>Open Popup
                                        </button>
                                    </div>
                                    <h4 className="page-title">Dashboard</h4>
                                </div>
                            </div>
                        </div>
                        <Modal isOpen={this.state.modal} toggle={()=>this.setState({modal:false})} className={this.props.className}>
                        <ModalHeader toggle={()=>this.setState({modal:false})}>Modal title</ModalHeader>
                        <ModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={()=>this.setState({modal:false})}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={()=>this.setState({modal:false})}>Cancel</Button>
                        </ModalFooter>
                        </Modal>

                    </div>

                </div>

                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <script>document.write(new Date().getFullYear())</script> © Hyper - Coderthemes.com
                            </div>
                            <div className="col-md-6">
                                <div className="text-md-end footer-links d-none d-md-block">
                                    <a href="javascript: void(0);">About</a>
                                    <a href="javascript: void(0);">Support</a>
                                    <a href="javascript: void(0);">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
        <div className="end-bar">

            <div className="rightbar-title">
                <a href="javascript:void(0);" className="end-bar-toggle float-end">
                    <i className="dripicons-cross noti-icon"></i>
                </a>
                <h5 className="m-0">Settings</h5>
            </div>

            <div className="rightbar-content h-100" data-simplebar>

                <div className="p-3">
                    <div className="alert alert-warning" role="alert">
                        <strong>Customize </strong> the overall color scheme, sidebar menu, etc.
                    </div>

                    <h5 className="mt-3">Color Scheme</h5>
                    <hr className="mt-1" />

                    <div className="form-check form-switch mb-1">
                        <input className="form-check-input" type="checkbox" name="color-scheme-mode" value="light" id="light-mode-check" checked />
                        <label className="form-check-label" for="light-mode-check">Light Mode</label>
                    </div>

                    <div className="form-check form-switch mb-1">
                        <input className="form-check-input" type="checkbox" name="color-scheme-mode" value="dark" id="dark-mode-check" />
                        <label className="form-check-label" for="dark-mode-check">Dark Mode</label>
                    </div>
       

                    <h5 className="mt-4">Width</h5>
                    <hr className="mt-1" />
                    <div className="form-check form-switch mb-1">
                        <input className="form-check-input" type="checkbox" name="width" value="fluid" id="fluid-check" checked />
                        <label className="form-check-label" for="fluid-check">Fluid</label>
                    </div>

                    <div className="form-check form-switch mb-1">
                        <input className="form-check-input" type="checkbox" name="width" value="boxed" id="boxed-check" />
                        <label className="form-check-label" for="boxed-check">Boxed</label>
                    </div>
        

                    <h5 className="mt-4">Left Sidebar</h5>
                    <hr className="mt-1" />
                    <div className="form-check form-switch mb-1">
                        <input className="form-check-input" type="checkbox" name="theme" value="default" id="default-check" />
                        <label className="form-check-label" for="default-check">Default</label>
                    </div>

                    <div className="form-check form-switch mb-1">
                        <input className="form-check-input" type="checkbox" name="theme" value="light" id="light-check" checked />
                        <label className="form-check-label" for="light-check">Light</label>
                    </div>

                    <div className="form-check form-switch mb-3">
                        <input className="form-check-input" type="checkbox" name="theme" value="dark" id="dark-check" />
                        <label className="form-check-label" for="dark-check">Dark</label>
                    </div>

                    <div className="form-check form-switch mb-1">
                        <input className="form-check-input" type="checkbox" name="compact" value="fixed" id="fixed-check" checked />
                        <label className="form-check-label" for="fixed-check">Fixed</label>
                    </div>

                    <div className="form-check form-switch mb-1">
                        <input className="form-check-input" type="checkbox" name="compact" value="condensed" id="condensed-check" />
                        <label className="form-check-label" for="condensed-check">Condensed</label>
                    </div>

                    <div className="form-check form-switch mb-1">
                        <input className="form-check-input" type="checkbox" name="compact" value="scrollable" id="scrollable-check" />
                        <label className="form-check-label" for="scrollable-check">Scrollable</label>
                    </div>

                    <div className="d-grid mt-4">
                        <button className="btn btn-primary" id="resetBtn">Reset to Default</button>
            
                        <a href="https://themes.getbootstrap.com/product/hyper-responsive-admin-dashboard-template/"
                            className="btn btn-danger mt-3" target="_blank"><i className="mdi mdi-basket me-1"></i> Purchase Now</a>
                    </div>
                </div>

            </div>
        </div>

        <div className="rightbar-overlay"></div>
            </React.Fragment>
        )   
    }
}
