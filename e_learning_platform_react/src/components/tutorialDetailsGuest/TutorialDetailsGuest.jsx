import React from 'react'
import './tutorialDetailsGuest.css'
import { Link } from 'react-router-dom'

const tutorialDetailsGuest = () => {
  return (
    <>
    <section className="section el_tutorialDetailsGuest_wrapper">
      <div className="container">
      <div className="el_tutorialDetailsGuest_inner">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <div className="el_tutorialDetailsGuest_left">
              <div className="el_tutorialDetailsGuest_header">
                <h2>Java from Beginner to Expert</h2>
                <p>This Java course was created especially for beginners in Java. Learn Java from scratch. Become Java Expert!</p>
                <h5>Course by: <span>The author</span></h5>
              </div>
              <div className="el_tutorialDetailsGuest_whatLearn">
                <h3>What you will learn</h3>
                <ul>
                  <li>The semantics of Java (the meaning of words)</li>
                  <li>The semantics of Java (the meaning of words)</li>
                  <li>The semantics of Java (the meaning of words)</li>
                  <li>The semantics of Java (the meaning of words)</li>
                  <li>The semantics of Java (the meaning of words)</li>
                  <li>The semantics of Java (the meaning of words)</li>
                  <li>The semantics of Java (the meaning of words)</li>
                  <li>The semantics of Java (the meaning of words)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="el_tutorialDetailsGuest_right">
              <div className="el_tutorialDetailsGuest_sidebar">
                <div className="el_tutorialDetailsGuest_video">
                  <img src="https://via.placeholder.com/650x500" alt="Video Image" className="img-fluid" />
                  <div className="el_tutorialDetailsGuest_videoOverlay">
                    <span className="el_playBtn"><img src="https://via.placeholder.com/15x15" alt="" className="img-fluid" /></span>
                  </div>
                </div>
                <div className="el_tutorialDetailsGuest_sidebarContent">
                  <h3 className="el_course_price">Offer Price - ₹479 <del>₹3499</del></h3>
                  <ul className="el_btn_list">
                    <li>
                      <Link to="/CartPge" className="el_btn">Add to cart</Link>
                    </li>
                    <li>
                      <Link to="/CartPge" className="el_btn">Buy now</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default tutorialDetailsGuest