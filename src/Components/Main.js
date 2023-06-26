import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Journey from './Journey'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'
import Project from './Project'
export default function Main() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Journey/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>  
    </div>
  )
}
