import React from 'react'
import { Link } from 'react-router-dom'
import './banner.css'

const Banner = () => {
  return (
    <section className="section el_banner_wrapper">
      <div className="container">
        <div className="el_banner_inner">
          <div className="el_banner_contentBlock">
            <h1>Learning that gets you</h1>
            <h4>Skills for your present (and your future). <br /> Get started with us.</h4>
            <Link to="/TutorialsPage" className="el_btn el_btn_white">Explore Now</Link>
          </div>
          <div className="el_banner_imageBlock">
            <img src="https://via.placeholder.com/650x500" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner