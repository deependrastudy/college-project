import React from 'react'
import { Link } from 'react-router-dom'
import './payment.css'

const Payment = () => {
  return (
    <>
      <section className="section el_payment_wrapper">
        <div className="container">
          <div className="el_payment_inner">
            <div className="el_payment_block successfull">
              <div className="el_payment_image">
                <img src="https://via.placeholder.com/100x100" alt="payment" className="img-fluid" />
              </div>
              <h4>Payment Successfull</h4>
              <p>The payment you have made is Successfull. Please go to home page</p>
              <Link to="/" className='el_btn'>Home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Payment