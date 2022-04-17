import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer className="section el_footer_wrapper">
        <div className="container">
          <div className="el_footer_inner">
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="el_footer_block">
                  <div className="el_footer_logo">
                    <Link to="/"><img src="https://via.placeholder.com/180x60" alt="Logo" className="img-fluid" /></Link>
                  </div>
                  <p>Skills for your present (and your future). Get started with us.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="el_footer_block">
                  <h4 className="el_footer_heading">Quick Links</h4>
                  <ul className="el_footer_nav">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/CategoryPage">Categories</Link>
                    </li>
                    <li>
                      <Link to="/TutorialPage">Tutorials</Link>
                    </li>
                    <li>
                      <Link to="/CartPage">My Cart</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="el_footer_block">
                  <h4 className="el_footer_heading">Top Categories</h4>
                  <ul className="el_footer_nav">
                    <li>
                      <Link to="/CategoryPage">Design</Link>
                    </li>
                    <li>
                      <Link to="/CategoryPage">Development</Link>
                    </li>
                    <li>
                      <Link to="/CategoryPage">Marketing</Link>
                    </li>
                    <li>
                      <Link to="/CategoryPage">IT and Software</Link>
                    </li>
                    <li>
                      <Link to="/CategoryPage">Business</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="el_footer_block">
                  <h4 className="el_footer_heading">Social Connects</h4>
                  <ul className="el_social_nav">
                    <li>
                      <Link to=""><span class="el_icon el_facebook"></span></Link>
                    </li>
                    <li>
                      <Link to=""><span class="el_icon el_twitter"></span></Link>
                    </li>
                    <li>
                      <Link to=""><span class="el_icon el_instagram"></span></Link>
                    </li>
                    <li>
                      <Link to=""><span class="el_icon el_linkedin"></span></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="el_copyright_wrapper">
          <div className="container">
            <div className="el_copyright_inner">
              <p>© 2022 E-Learning.  All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer