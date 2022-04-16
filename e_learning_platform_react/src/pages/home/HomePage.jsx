import React from 'react'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Courses from '../../components/courses/Courses'
import StudentViewing from '../../components/studentViewing/StudentViewing'
import Categories from '../../components/categories/Categories'
import BecomeInstructor from '../../components/becomeInstructor/BecomeInstructor'
import Footer from '../../components/footer/Footer'

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Courses />
      <StudentViewing />
      <Categories />
      <BecomeInstructor />
      <Footer />
    </>
  )
}

export default HomePage