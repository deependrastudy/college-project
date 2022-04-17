import React from 'react'
import './tutorialDetails.css'
import { Link } from 'react-router-dom'

const TutorialDetails = () => {
  return (
    <>
    <section className="section el_tutorialDetails_wrapper">
      <div className="container">
      <div className="el_tutorialDetails_inner">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <div className="el_tutorialDetails_left">
              <div className="el_tutorialDetails_videoWrapper">
                <img src="https://via.placeholder.com/767x500" alt="main video" className="img-fluid" />
              </div>
              <div className="video_chapter_title">
                <h5>Chapter 1 : What is java ?</h5>
              </div>
              <div className="el_tutorialDetails_header">
                <p>This Java course was created especially for beginners in Java. Learn Java from scratch. Become Java Expert!</p>
                <h5>Course by: <span>The author</span></h5>
              </div>
              <div className="el_tutorialDetails_attachmentWrapper">
                <h4>Attachments</h4>
                <ul>
                  <li>
                    <Link to="">
                      <img src="https://via.placeholder.com/70x70" alt="attachments" className="img-fluid" />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img src="https://via.placeholder.com/70x70" alt="attachments" className="img-fluid" />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img src="https://via.placeholder.com/70x70" alt="attachments" className="img-fluid" />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img src="https://via.placeholder.com/70x70" alt="attachments" className="img-fluid" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="el_tutorialDetails_whatLearn">
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
              <div className="el_tutorialDetails_commentBox">
                <textarea placeholder='Your comments'></textarea>
                <input type="submit" value="Submit" className='el_btn' />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="el_tutorialDetails_right">
              <div className="el_tutorialDetails_sidebar">
                <div className="el_tutorialDetails_upcomingWrapper">
                  <ul>
                    <li>
                      <div className="el_tutorialDetails_upcomingBlock active">
                        <div className="upcoming_thumb">
                          <Link to="/TutorialDetailsPage"><img src="https://via.placeholder.com/70x70" alt="upcoming" className="img-fluid" /></Link>
                        </div>
                        <div className="upcoming_name">
                          <h5>
                            <Link to="/TutorialDetailsPage">Upcoming video</Link>
                          </h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="el_tutorialDetails_upcomingBlock">
                        <div className="upcoming_thumb">
                          <Link to="/TutorialDetailsPage"><img src="https://via.placeholder.com/70x70" alt="upcoming" className="img-fluid" /></Link>
                        </div>
                        <div className="upcoming_name">
                          <h5>
                            <Link to="/TutorialDetailsPage">Upcoming video</Link>
                          </h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="el_tutorialDetails_upcomingBlock">
                        <div className="upcoming_thumb">
                          <Link to="/TutorialDetailsPage"><img src="https://via.placeholder.com/70x70" alt="upcoming" className="img-fluid" /></Link>
                        </div>
                        <div className="upcoming_name">
                          <h5>
                            <Link to="/TutorialDetailsPage">Upcoming video</Link>
                          </h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="el_tutorialDetails_upcomingBlock">
                        <div className="upcoming_thumb">
                          <Link to="/TutorialDetailsPage"><img src="https://via.placeholder.com/70x70" alt="upcoming" className="img-fluid" /></Link>
                        </div>
                        <div className="upcoming_name">
                          <h5>
                            <Link to="/TutorialDetailsPage">Upcoming video</Link>
                          </h5>
                        </div>
                      </div>
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

export default TutorialDetails