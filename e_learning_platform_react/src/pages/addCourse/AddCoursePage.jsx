import React from 'react'
import AddCourse from '../../components/addCourse/AddCourse'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const AddCoursePage = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <AddCourse />
      <Footer />
    </>
  )
}

export default AddCoursePage