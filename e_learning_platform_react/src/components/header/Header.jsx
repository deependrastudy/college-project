import React from 'react'
import { Link } from "react-router-dom";
import $ from "jquery";
import './header.css'

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
      $(".el_header_wrapper").addClass("active");
  }
  else{
    $(".el_header_wrapper").removeClass("active");
  }
});

const Header = () => {
  return (
    <>
      <header className='el_header_wrapper'>
        <div className="container">
          <div className="el_header_inner">
            <div className="el_logo_wrapper">
              <div className="el_logo_block">
                <Link to="/"><img src="https://via.placeholder.com/180x60" alt="logo" className="img-fluid" /></Link>
              </div>
            </div>
            <div className="el_nav_wrapper">
              <nav className="el_nav_inner">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/CategoryPage">Categories</Link></li>
                  <li><Link to="/TutorialPage">Tutorials</Link></li>
                  <li><Link to="/CartPage"><span className="el_icon el_cart"></span></Link></li>
                  <li><Link to=""><span className="el_icon el_search"></span></Link></li>
                  <li><Link to="/LoginPage" className='el_btn'>Login/Signup</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header