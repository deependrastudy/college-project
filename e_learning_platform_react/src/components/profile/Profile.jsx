import React from 'react'
import { Link } from 'react-router-dom'
import './profile.css'

const Profile = () => {
  return (
    <>
    <section className="section el_profile_wrapper">
      <div className="container">
        <div className="el_profile_inner">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="el_profile_section">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="el_profileImage_block">
                      <div className="el_profileImage_inner">
                        <img src="https://via.placeholder.com/150x150" alt="Profile" />
                        <input type="file" name="profile" id="profile" />
                        <label htmlFor="profile" className="el_profileImage_overlay">
                          <span className='el_icon el_edit'></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="el_form_block">
                      <label className="el_form_label">Name</label>
                      <input type="text" className="el_form_field" placeholder='Name' />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="el_form_block">
                      <label className="el_form_label">Name</label>
                      <input type="text" className="el_form_field" placeholder='Name' />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="el_form_block">
                      <label className="el_form_label">Name</label>
                      <input type="text" className="el_form_field" placeholder='Name' />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="el_form_block">
                      <label className="el_form_label">Name</label>
                      <input type="text" className="el_form_field" placeholder='Name' />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="el_form_block">
                      <input type="submit" className="el_btn" value='Update' />
                    </div>
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

export default Profile