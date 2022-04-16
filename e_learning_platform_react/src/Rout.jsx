import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/home/HomePage'
import CategoryPage from './pages/categories/CategoryPage'
import TutorialPage from './pages/tutorials/TutorialPage'
import TutorialDetailsGuestPage from './pages/tutorialDetailsGuestPage/TutorialDetailsGuestPage'
import TutorialDetailsPage from './pages/tutorialDetailsPage/TutorialDetailsPage'
import LoginPage from './pages/login/LoginPage'
import SignupPage from './pages/signup/SignupPage'
import CartPage from './pages/cart/CartPage'
import PaymentPage from './pages/payment/PaymentPage'
import ProfilePage from './pages/profile/ProfilePage'
import AddCoursePage from './pages/addCourse/AddCoursePage'

const Rout = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/CategoryPage" element={<CategoryPage />} />
        <Route exact path="/TutorialPage" element={<TutorialPage />} />
        <Route exact path="/TutorialDetailsGuestPage" element={<TutorialDetailsGuestPage />} />
        <Route exact path="/TutorialDetailsPage" element={<TutorialDetailsPage />} />
        <Route exact path="/LoginPage" element={<LoginPage />} />
        <Route exact path="/SignupPage" element={<SignupPage />} />
        <Route exact path="/CartPage" element={<CartPage />} />
        <Route exact path="/PaymentPage" element={<PaymentPage />} />
        <Route exact path="/ProfilePage" element={<ProfilePage />} />
        <Route exact path="/AddCoursePage" element={<AddCoursePage />} />
      </Routes>
    </Router>
  )
}

export default Rout