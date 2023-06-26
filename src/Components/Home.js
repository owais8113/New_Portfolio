import React from 'react'
import './style.css'
import img from '../assets/front.png'

export default function Home() {
  return (
    <div>
      <div class="about" id="about">
        <h1>Hello, I'm</h1>
        <h2 class="heading">Owais <span>Ahmed</span></h2>
        <div class="about-img">
            <img src={img} alt=""/>
            <span class="circle-spin"></span>
        </div>
        <div class="about-content">
            <div class="text-animate"><h3>IoT developer</h3>
                </div>
            <p>I invite you to explore my portfolio, where you will discover my approach to problem-solving, and dedication to always learn. Throughout my academic journey, I have been involved in several exciting projects & activities that have allowed me to apply my skills and knowledge.</p>
            <div class="btn-box">
                <a href="https://drive.google.com/file/d/1V3whgNRnhy0KVNUcPZsbCuOf5scJrJTv/view?usp=sharing" class="btn">Download CV</a>
                <a class="btn" href="#contact" >Let's Talk</a>
            </div>
            
        </div>
    </div>
    </div>
  )
}
