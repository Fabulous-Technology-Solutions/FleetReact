import React from 'react'
import NavBar from '../components/landingPage/NavBar'
import { Outlet } from 'react-router-dom'
import FooterComp from '../components/landingPage/FooterComp'

const LandingPageLayout = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    <FooterComp />
    </>
  )
}

export default LandingPageLayout