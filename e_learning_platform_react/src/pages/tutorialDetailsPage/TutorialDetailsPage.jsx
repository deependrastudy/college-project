import React from 'react'
import Header from '../../components/header/Header'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import TutorialDetails from '../../components/tutorialDetails/TutorialDetails'
import BecomeInstructor from '../../components/becomeInstructor/BecomeInstructor'
import Footer from '../../components/footer/Footer'

const TutorialDetailsPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <TutorialDetails />
      <BecomeInstructor />
      <Footer />
    </>
  )
}

export default TutorialDetailsPage