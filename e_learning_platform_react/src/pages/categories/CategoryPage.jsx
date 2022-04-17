import React from 'react'
import Header from '../../components/header/Header'
import Courses from '../../components/courses/Courses'
import BecomeInstructor from '../../components/becomeInstructor/BecomeInstructor'
import Footer from '../../components/footer/Footer'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'

const CategoryPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Courses />
      <BecomeInstructor />
      <Footer />
    </>
  )
}

export default CategoryPage