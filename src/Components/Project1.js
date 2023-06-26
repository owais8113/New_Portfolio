import React from 'react'
import Navbar1 from './Navbar1'
import './style.css'
import Footer from './Footer.js'
import agri from '../assets/agri.jpeg'
import PDFViewer from './PDFViewer'
import video from '../assets/VID-20230427-WA0003.mp4'
export default function Project1() {
  return (
    <div>
      <Navbar1/>
      <div className="project1-container">
      <h2 className="project1-title">Smart Agriculture using IoT</h2>
      <div className="project1-media">
        <p className="project1-abstract">
        <img src={agri} alt="Project Photo 1" className="project1-photo" />
      {/* <p className="project1-abstract"> */}
      Our smart agriculture project aims to revolutionize traditional farming practices by integrating 
      cutting-edge technology. Combining both hardware and software components, our system collects real-time data from various sensors deployed in the field. 
     <p>Then the sensor data is wirelessly transmitted to our centralized system. The data is then processed and analyzed using custom software algorithms and machine learning techniques. This enables us to gain valuable insights into the environmental conditions and crop health, empowering farmers with actionable information to make informed decisions.
     </p>

      </p>
      <div>
        <h3 className='project-pdf'>Project Report</h3>
        <PDFViewer/>
        
        {/* <img src="/path/to/photo2.jpg" alt="Project Photo 2" className="project1-photo" /> */}
        <h3 className='project-video'>Video</h3>
        <video src={video} controls className="project1-video" />
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}
