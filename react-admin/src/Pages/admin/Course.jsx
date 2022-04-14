import React, { Component } from 'react';
import Navbar  from './Navbar';
import Footer from './Footer';
import Header from './Header'
import Course from '../../components/Course';
require("../../assets/css/icons.min.css");
require("../../assets/css/app.min.css");

export default class CategoryPage extends Component {
    
    state = {
        modal: false   
     };

     componentDidMount(){
     }

     render() {
        return (
            <React.Fragment>
                <div className="wrapper">
                <Header/>
                <Navbar/>

            <div className="content-page">
                <Course/>
                <Footer/>
            </div>
        </div>

            </React.Fragment>

        )
     }

}