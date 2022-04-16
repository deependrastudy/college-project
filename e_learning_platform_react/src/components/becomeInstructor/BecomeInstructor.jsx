import React from 'react'
import { Link } from 'react-router-dom'
import './becomeInstructor.css'

const BecomeInstructor = () => {
  return (
    <>
      <section className="section el_becomeInstructor_wrapper">
        <div className="container">
          <div className="el_becomeInstructor_inner">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6">
                <div className="el_becomeInstructor_image">
                  <img src="https://via.placeholder.com/400x400" alt="Become Instructor" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="el_becomeInstructor_content">
                  <div className="el_becomeInstructor_contentInner">
                    <h3>Become an instructor</h3>
                    <p>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                    <Link to="/Login" className='el_btn'>Start Teaching Today</Link>
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

export default BecomeInstructor