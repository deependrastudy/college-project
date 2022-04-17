import React from 'react'
import Header from '../../components/header/Header'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import TutorialDetailsGuest from '../../components/tutorialDetailsGuest/TutorialDetailsGuest'
import BecomeInstructor from '../../components/becomeInstructor/BecomeInstructor'
import Footer from '../../components/footer/Footer'

const TutorialDetailsGuestPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <TutorialDetailsGuest />
      <BecomeInstructor />
      <Footer />
    </>
  )
}

export default TutorialDetailsGuestPage