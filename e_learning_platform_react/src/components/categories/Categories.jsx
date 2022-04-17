import React from 'react'
import { Link } from "react-router-dom";
import './categories.css'

const Categories = () => {
  const category = [
    {
      image_path: 'https://via.placeholder.com/100x100',
      name: 'Design'
    },
    {
      image_path: 'https://via.placeholder.com/100x100',
      name: 'Development'
    },
    {
      image_path: 'https://via.placeholder.com/100x100',
      name: 'Marketing'
    },
    {
      image_path: 'https://via.placeholder.com/100x100',
      name: 'IT and Software'
    },
    {
      image_path: 'https://via.placeholder.com/100x100',
      name: 'Personal Development'
    },
    {
      image_path: 'https://via.placeholder.com/100x100',
      name: 'Business'
    },
    {
      image_path: 'https://via.placeholder.com/100x100',
      name: 'Photography'
    },
    {
      image_path: 'https://via.placeholder.com/100x100',
      name: 'Music'
    },
  ];
  return (
    <>
      <section className="section el_category_wrapper">
        <div className="container">
          <div className="el_category_inner">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="el_heading_block">
                  <h2>Our top <span>categories</span></h2>
                </div>
              </div>
            </div>
            <div className="el_category_section">
              <div className="row">
                {
                  category.map(category => {
                    return(
                      <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <Link to="/CategoryPage">
                          <div className="el_category_block">
                            <div className="el_category_icon">
                              <img src={category.image_path} alt="Category" className="img-fluid" />
                            </div>
                            <h4>{category.name}</h4>
                          </div>
                        </Link>
                      </div>
                    )
                  })
                }
              </div>  
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Categories