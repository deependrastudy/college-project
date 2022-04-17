import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <>
      <section className="el_login_wrapper">
        <div className="container">
          <div className="el_login_inner">
            <div className="el_login_block">
              <div className="el_login_header">
                <h3>Login</h3>
              </div>
              <div className="el_form_block">
                <input type="email" className="el_form_field" placeholder='Username' />
              </div>
              <div className="el_form_block">
                <input type="password" className="el_form_field" placeholder='Password' />
              </div>
              <div className="el_form_block">
                <input type="checkbox" name="remember" id="remember" />
                <label className='rememberLabel' htmlFor="remember">Remember me</label>
              </div>
              <div className="el_form_block">
                <label className='el_form_label'>Login as:</label>
                <ul className='el_user_role_list'>
                  <li>
                    <input type="radio" name="user_role" id="student" />
                    <label htmlFor="student">Student</label>
                  </li>
                  <li>
                    <input type="radio" name="user_role" id="instructor" />
                    <label htmlFor="instructor">Instructor</label>
                  </li>
                </ul>
              </div>
              <div className="el_form_block">
                <input type="submit" value="Login" className='el_btn' />
              </div>
              <div className="el_login_footer">
                <p>Don't have an account? <Link to="/SignupPage">Signup here</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login