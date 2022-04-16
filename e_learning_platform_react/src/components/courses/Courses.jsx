import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import '../../../node_modules/swiper/swiper-bundle.min.css';
import './courses.css'

SwiperCore.use([Navigation]);

const courses = () => {
  const python = [];
  for (let i = 0; i < 8; i += 1){
    python.push(
      <SwiperSlide key={i}>
        <div className="el_courses_slide">
          <div className="el_courses_image">
            <img src="https://via.placeholder.com/650x400" alt="" className="img-fluid" />
          </div>
          <div className="el_courses_content">
            <h4><Link to="/TutorialDetailsPage">Learn Python: The Complete Python Programming Course</Link></h4>
            <h6>The author, Company</h6>
            <p>Ratings: <span>4.4</span></p>
            <h3>₹525 <del>₹3499</del></h3>
          </div>
        </div>
      </SwiperSlide>
    );
  }
  const web_developement = [];
  for (let i = 0; i < 8; i += 1){
    web_developement.push(
      <SwiperSlide key={i}>
        <div className="el_courses_slide">
          <div className="el_courses_image">
            <img src="https://via.placeholder.com/650x400" alt="" className="img-fluid" />
          </div>
          <div className="el_courses_content">
            <h4><Link to="/TutorialDetailsPage">Become a Certified HTML, CSS, JavaScript Web Developer</Link></h4>
            <h6>The author, Company</h6>
            <p>Ratings: <span>4.4</span></p>
            <h3>₹525 <del>₹3499</del></h3>
          </div>
        </div>
      </SwiperSlide>
    );
  }
  return (
    <>
      <section className="el_courses_wrapper section">
        <div className="container">
          <div className="el_courses_inner">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="el_heading_block">
                  <h2>A broad selection of <span>courses</span></h2>
                </div>
              </div>
            </div>
            <div className="el_courses_optionWrapper">
              <div className="el_courses_row">
                <div className="el_courses_sidebar">
                  <h3>Expand your career opportunities with <span>Python</span></h3>
                  <Link to="/TutorialsPage" className="el_btn">Explore More</Link>
                </div>
                <div className="el_courses_slider_wrapper">
                  <Swiper id='el_courses_slider' 
                  navigation
                  spaceBetween={10}
                  slidesPerView={3}
                  breakpoints={{
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 2,
                    },
                    // when window width is >= 1024px
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                  >
                    {python}
                  </Swiper>
                </div>
              </div>
              <div className="el_courses_row">
                <div className="el_courses_sidebar">
                  <h3>Build websites and applications with <span>Web Development</span></h3>
                  <Link to="/TutorialsPage" className="el_btn">Explore More</Link>
                </div>
                <div className="el_courses_slider_wrapper">
                  <Swiper id='el_courses_slider' 
                  navigation
                  spaceBetween={10}
                  slidesPerView={3}
                  breakpoints={{
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 2,
                    },
                    // when window width is >= 1024px
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                  >
                    {web_developement}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default courses