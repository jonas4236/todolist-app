import React from "react"
import { Outlet } from "react-router"
import NavBar from './NavBar.tsx'
import Footer from './Footer.tsx'

const Layouts = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layouts
