import React from 'react'
import img1 from '../assets/img3.jpg'
import img2 from '../assets/portfolio-img1.jpg'
import img3 from '../assets/portfolio-img2.png'
import './style.css'
import { Link } from 'react-router-dom'
export default function Project() {
  return (
    <div>
      <section class="projects" id="projects">
        <h2 class="heading">Latest <span>Projects</span></h2>
        <div class="project-container">
            <div class="project-box">
                <img src={img1} alt=""/>
                <div class="project-layer">
                    <h4>Smart Agriculture using IoT</h4>
                    <p>This IoT-based smart agriculture project utilizes the NodeMCU ESP8266 microcontroller to enable remote monitoring and control of agricultural processes. It integrates sensors, actuators, and cloud connectivity to improve crop yield, automate irrigation etc.</p>
                    
                    <Link to="/project1"><i class="bx bx-link-external"></i></Link>
                </div>
            </div>
            <div class="project-box">
                <img src={img2} alt=""/>
                <div class="project-layer">
                    <h4>Line Follower Robot</h4>
                    <p>
                        A line follower robot is a small autonomous vehicle that uses infrared sensors to detect and follow a line on the ground. It is controlled by an Arduino microcontroller board, which processes sensor data and adjusts the robot's movement accordingly.</p>
                        <Link to="/project2"><i class="bx bx-link-external"></i></Link>
                </div>
            </div>
            <div class="project-box">
                <img src={img3} alt=""/>
                <div class="project-layer">
                    <h4>RFID based Smart Attendance</h4>
                    <p>RFID-based smart attendance using NodeMCU utilizes RFID technology to track and record attendance. NodeMCU reads the unique ID of RFID tags, compares it with a database, and registers attendance accordingly.</p>
                    <Link to="/project3"><i class="bx bx-link-external"></i></Link>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
