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
                        <ul className="list-unstyled topbar-menu float-end mb-0">
                            <li className="dropdown notification-list d-lg-none">
                                <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <i className="dripicons-search noti-icon"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                                    <form className="p-3">
                                        <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                                    </form>
                                </div>
                            </li>
                            <li className="dropdown notification-list topbar-dropdown">
                                <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <img src="assets/images/flags/us.jpg" alt="user-image" className="me-0 me-sm-1" height="12" /> 
                                    <span className="align-middle d-none d-sm-inline-block">English</span> <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu">

                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">German</span>
                                    </a>

                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">Italian</span>
                                    </a>
                
                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">Spanish</span>
                                    </a>

                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">Russian</span>
                                    </a>

                                </div>
                            </li>

                            <li className="dropdown notification-list">
                                <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <i className="dripicons-bell noti-icon"></i>
                                    <span className="noti-icon-badge"></span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg">

                                    <div className="dropdown-item noti-title px-3">
                                        <h5 className="m-0">
                                            <span className="float-end">
                                                <a href="javascript: void(0);" className="text-dark">
                                                    <small>Clear All</small>
                                                </a>
                                            </span>Notification
                                        </h5>
                                    </div>

                                    <div className="px-3" style={{"max-height": "300px"}} data-simplebar>

                                        <h5 className="text-muted font-13 fw-normal mt-0">Today</h5>
                                        <a href="javascript:void(0);" className="dropdown-item p-0 notify-item card unread-noti shadow-none mb-2">
                                            <div className="card-body">
                                                <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>   
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="notify-icon bg-primary">
                                                            <i className="mdi mdi-comment-account-outline"></i>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 text-truncate ms-2">
                                                        <h5 className="noti-item-title fw-semibold font-14">Datacorp <small className="fw-normal text-muted ms-1">1 min ago</small></h5>
                                                        <small className="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                                                    </div>
                                                  </div>
                                            </div>
                                        </a>

                                        <a href="javascript:void(0);" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                                            <div className="card-body">
                                                <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>   
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="notify-icon bg-info">
                                                            <i className="mdi mdi-account-plus"></i>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 text-truncate ms-2">
                                                        <h5 className="noti-item-title fw-semibold font-14">Admin <small className="fw-normal text-muted ms-1">1 hours ago</small></h5>
                                                        <small className="noti-item-subtitle text-muted">New user registered</small>
                                                    </div>
                                                  </div>
                                            </div>
                                        </a>

                                        <h5 className="text-muted font-13 fw-normal mt-0">Yesterday</h5>

                                        <a href="javascript:void(0);" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                                            <div className="card-body">
                                                <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>   
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="notify-icon">
                                                            <img src="assets/images/users/avatar-2.jpg" className="img-fluid rounded-circle" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 text-truncate ms-2">
                                                        <h5 className="noti-item-title fw-semibold font-14">Cristina Pride <small className="fw-normal text-muted ms-1">1 day ago</small></h5>
                                                        <small className="noti-item-subtitle text-muted">Hi, How are you? What about our next meeting</small>
                                                    </div>
                                                  </div>
                                            </div>
                                        </a>

                                        <h5 className="text-muted font-13 fw-normal mt-0">30 Dec 2021</h5>

                                        <a href="javascript:void(0);" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                                            <div className="card-body">
                                                <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>   
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="notify-icon bg-primary">
                                                            <i className="mdi mdi-comment-account-outline"></i>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 text-truncate ms-2">
                                                        <h5 className="noti-item-title fw-semibold font-14">Datacorp</h5>
                                                        <small className="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                                                    </div>
                                                  </div>
                                            </div>
                                        </a>

                                         <a href="javascript:void(0);" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                                            <div className="card-body">
                                                <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>   
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="notify-icon">
                                                            <img src="assets/images/users/avatar-4.jpg" className="img-fluid rounded-circle" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 text-truncate ms-2">
                                                        <h5 className="noti-item-title fw-semibold font-14">Karen Robinson</h5>
                                                        <small className="noti-item-subtitle text-muted">Wow ! this admin looks good and awesome design</small>
                                                    </div>
                                                  </div>
                                            </div>
                                        </a>

                                        <div className="text-center">
                                            <i className="mdi mdi-dots-circle mdi-spin text-muted h3 mt-0"></i>
                                        </div>
                                    </div>

                                    <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item border-top border-light py-2">
                                        View All
                                    </a>

                                </div>
                            </li>

                            <li className="dropdown notification-list d-none d-sm-inline-block">
                                <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <i className="dripicons-view-apps noti-icon"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">

                                    <div className="p-2">
                                        <div className="row g-0">
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#">
                                                    <img src="assets/images/brands/slack.png" alt="slack" />
                                                    <span>Slack</span>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#">
                                                    <img src="assets/images/brands/github.png" alt="Github" />
                                                    <span>GitHub</span>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#">
                                                    <img src="assets/images/brands/dribbble.png" alt="dribbble" />
                                                    <span>Dribbble</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="row g-0">
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#">
                                                    <img src="assets/images/brands/bitbucket.png" alt="bitbucket" />
                                                    <span>Bitbucket</span>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#">
                                                    <img src="assets/images/brands/dropbox.png" alt="dropbox" />
                                                    <span>Dropbox</span>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#">
                                                    <img src="assets/images/brands/g-suite.png" alt="G Suite" />
                                                    <span>G Suite</span>
                                                </a>
                                            </div>
                                        </div> 
                                    </div>

                                </div>
                            </li>

                            <li className="notification-list">
                                <a className="nav-link end-bar-toggle" href="javascript: void(0);">
                                    <i className="dripicons-gear noti-icon"></i>
                                </a>
                            </li>

                            <li className="dropdown notification-list">
                                <a className="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false"
                                    aria-expanded="false">
                                    <span className="account-user-avatar"> 
                                        <img src="assets/images/users/avatar-1.jpg" alt="user-image" className="rounded-circle" />
                                    </span>
                                    <span>
                                        <span className="account-user-name">Dominic Keller</span>
                                        <span className="account-position">Founder</span>
                                    </span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                                    <div className=" dropdown-header noti-title">
                                        <h6 className="text-overflow m-0">Welcome !</h6>
                                    </div>

                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <i className="mdi mdi-account-circle me-1"></i>
                                        <span>My Account</span>
                                    </a>

                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <i className="mdi mdi-account-edit me-1"></i>
                                        <span>Settings</span>
                                    </a>

                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <i className="mdi mdi-lifebuoy me-1"></i>
                                        <span>Support</span>
                                    </a>

                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <i className="mdi mdi-lock-outline me-1"></i>
                                        <span>Lock Screen</span>
                                    </a>

                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <i className="mdi mdi-logout me-1"></i>
                                        <span>Logout</span>
                                    </a>
                                </div>
                            </li>

                        </ul>
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
