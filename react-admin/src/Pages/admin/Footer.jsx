import React, { Component } from 'react'
require("../../assets/css/icons.min.css");
require("../../assets/css/app.min.css");

export default class Footer extends Component {
    
    state = {
        modal: false
     };

     componentDidMount(){
 
    }

    render() {
        return (

            <>
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
            </>
        )
    }

}