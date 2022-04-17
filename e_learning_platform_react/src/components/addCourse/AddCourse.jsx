import React from 'react'
import { Link } from 'react-router-dom'
import './addCourse.css'

const AddCourse = () => {
  return (
    <>
      <section className="section el_addCourse_wrapper">
        <div className="container">
          <div className="el_addCourse_inner">
            <div className="el_addCourse_uploadBlock">
              <input type="file" name="uploadFile" id="uploadFile" />
              <label htmlFor="uploadFile">
                <img src="https://via.placeholder.com/150x150" alt="Thumbnail" className="img-fluid" />
              </label>
            </div>
            <div className="el_addCourse_uploadList">
              <ul>
                <li>
                  <div className="el_uploaded_block">
                    <span className="el_icon el_close"></span>
                    <img src="https://via.placeholder.com/200x120" alt="Thumbnail" className="img-fluid" />
                  </div>
                </li>
                <li>
                  <div className="el_uploaded_block">
                    <span className="el_icon el_close"></span>
                    <img src="https://via.placeholder.com/200x120" alt="Thumbnail" className="img-fluid" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="el_addCourse_contentBlock">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="el_form_block">
                    <input type="text" className="el_form_field" placeholder='Enter Title' />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="el_form_block">
                    <input type="text" className="el_form_field" placeholder='Enter Title' />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="el_form_block">
                    <input type="text" className="el_form_field" placeholder='Enter Title' />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="el_form_block">
                    <input type="text" className="el_form_field" placeholder='Enter Title' />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="el_form_block">
                    <textarea className="el_form_field" placeholder='Enter Description'></textarea>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="el_form_block">
                    <input type="submit" value="Upload" className='el_btn' />
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

export default AddCourse