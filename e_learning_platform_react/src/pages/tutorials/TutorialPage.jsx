import React from 'react'
import Header from '../../components/header/Header'
import StudentViewing from '../../components/studentViewing/StudentViewing'
import BecomeInstructor from '../../components/becomeInstructor/BecomeInstructor'
import Footer from '../../components/footer/Footer'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'

const TutorialPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <StudentViewing />
      <BecomeInstructor />
      <Footer />
    </>
  )
}

export default TutorialPage