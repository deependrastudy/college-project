import React from 'react'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Profile from '../../components/profile/Profile'

const ProfilePage = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Profile />
      <Footer />
    </>
  )
}

export default ProfilePage