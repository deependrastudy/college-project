import React from 'react'
import { Link } from 'react-router-dom'
import './cart.css'

const Cart = () => {
  return (
    <>
      <section className="el_cart_wrapper">
        <div className="container">
          <div className="el_cart_inner">
            <div className="row">
              <div className="col-lg-7 col-md-7">
                <div className="el_cart_listWrapper">
                  <h3>Products Details</h3>
                  <div className="el_cart_listBlock">
                    <div className="el_cart_productImage">
                      <img src="https://via.placeholder.com/100x100" alt="Products" className="img-fluid" />
                    </div>
                    <div className="el_cart_productName">
                      <h5>Here is your product name</h5>
                      <p>$24</p>
                      <Link to="">Remove</Link>
                    </div>
                    <div className="el_cart_productQuantity">
                    <span>Qty</span><input type="number" min="1" />
                    </div>
                    <div className="el_cart_productPrice">
                      <h5>$24</h5>
                    </div>
                  </div>
                  <div className="el_cart_listBlock">
                    <div className="el_cart_productImage">
                      <img src="https://via.placeholder.com/100x100" alt="Products" className="img-fluid" />
                    </div>
                    <div className="el_cart_productName">
                      <h5>Here is your product name Here is your product name Here is your product name</h5>
                      <p>$24</p>
                      <Link to="">Remove</Link>
                    </div>
                    <div className="el_cart_productQuantity">
                    <span>Qty</span><input type="number" min="1" />
                    </div>
                    <div className="el_cart_productPrice">
                      <h5>$24</h5>
                    </div>
                  </div>
                </div>
                <div className="el_cart_paymentMethod">
                  <h3>Payment Methods</h3>
                  <div className="el_cart_cardDetails">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="el_form_block">
                          <input type="text" className="el_form_field" placeholder='Card Number' />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="el_form_block">
                          <input type="text" className="el_form_field" placeholder='Card Holder Name' />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="el_form_block">
                          <input type="date" className="el_form_field" placeholder='Expiry' />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="el_form_block">
                          <input type="password" className="el_form_field" placeholder='CVV' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3>Pay using UPI</h3>
                  <div className="el_cart_cardDetails">
                    <ul>
                      <li>
                        <input type="radio" name="upi" id="phonepay" />
                        <label htmlFor="phonepay"><img src="https://via.placeholder.com/100x50" alt="Phonepay" className="img-fluid" title='PhonePay' /></label>
                      </li>
                      <li>
                        <input type="radio" name="upi" id="GPay" />
                        <label htmlFor="GPay"><img src="https://via.placeholder.com/100x50" alt="GPay" className="img-fluid" title='GPay' /></label>
                      </li>
                      <li>
                        <input type="radio" name="upi" id="PayTm" />
                        <label htmlFor="PayTm"><img src="https://via.placeholder.com/100x50" alt="PayTm" className="img-fluid" title='PayTm' /></label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5">
                <div className="el_cart_totalWrapper">
                  <h3>Order Summary</h3>
                  <div className="el_cart_orderList">
                    <ul>
                      <li><span>Subtotal</span><span>$98</span></li>
                      <li><span>Subtotal</span><span>$98</span></li>
                    </ul>
                  </div>
                  <h6><span>Order Total</span><span>$98</span></h6>
                  <Link to="/CheckoutPage" className="el_btn">Checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart