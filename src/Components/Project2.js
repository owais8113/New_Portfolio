import React from 'react'
import Navbar1 from './Navbar1'
import './style.css'
import Footer from './Footer.js'
import video1 from '../assets/VID-20230401-WA0008.mp4'
export default function Project2() {
  return (
    <div>
      <Navbar1/>
      <div className="project1-container">
      <h2 className="project1-title">Line Follower Robot using Arduino Uno</h2>
      <div className="project1-media">
        {/* <h3 className='project-video'>Video</h3> */}
        <video src={video1} muted controls className="project1-video" />
        <p className="project1-abstract">
        {/* <img src={agri} alt="Project Photo 1" className="project1-photo" /> */}
      {/* <p className="project1-abstract"> */}
      <br/>The Arduino Uno-based line follower robot with IR sensors is a popular and exciting project in the field of robotics. The robot is designed to autonomously follow a line on the ground using infrared (IR) sensors for line detection. Here's an overview of how the project works: 
     </p>
     <p className="project1-abstract">Working principle:<hr/>

Line detection: The IR sensors are placed underneath the robot, facing the ground. They emit infrared light and detect its reflection. When the robot is on top of a line, the sensors detect a significant decrease in reflected light intensity.
<hr/>
Sensor data interpretation: The Arduino Uno reads the sensor values and determines the position of the line. Based on the sensor readings, the robot adjusts its movement to stay on the line.
<hr/>
Motor control: The Arduino Uno sends appropriate signals to the motor driver module, which controls the speed and direction of the robot's motors. By adjusting the motor speeds differently, the robot can make turns and maintain its position on the line.
<hr/>
Feedback loop: The robot continuously repeats the line detection, sensor data interpretation, and motor control steps in a feedback loop. This allows the robot to continuously follow the line, making necessary adjustments in real-time.
      </p>
      <div>
        
        
        {/* <img src="/path/to/photo2.jpg" alt="Project Photo 2" className="project1-photo" /> */}
      </div>
      </div>
      
      <Footer/>
    </div>
    </div>
    
  )
}
