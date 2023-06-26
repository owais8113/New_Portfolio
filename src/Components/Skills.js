import React from 'react'
import './style.css'
export default function Skills() {
  return (
    <div>
      <section class="skills" id="skills">
        <h2 class="heading">My <span>Skills</span></h2>
        <div classNAme="skills-row">
            <div className="skills-column">
                <h3 className="title">Technical Skills</h3>
                <div className="skills-box">
                    <div className="skills-content">
                        {/* <div className="progress"> */}
                            <h3>Frontend Development <span>80%</span></h3>
                            <div className="bar"><span className='bar1'></span></div>
                        {/* </div> */}
                        {/* <div className="progress"> */}
                            <h3>C/C++ <span>82%</span></h3>
                            <div className="bar"><span className='bar2'></span></div>
                        {/* </div> */}
                        {/* <div className="progress"> */}
                            <h3>DSA <span>67%</span></h3>
                            <div className="bar"><span className='bar3'></span></div>
                        {/* </div> */}
                        {/* <div className="progress"> */}
                            <h3>Python <span>85%</span></h3>
                            <div className="bar"><span className='bar4'></span></div>
                        {/* </div> */}
                        {/* <div className="progress"> */}
                            <h3>MySQL <span>80%</span></h3>
                            <div className="bar"><span className='bar5'></span></div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <div className="skills-column">
                <h3 className="title">Soft Skills</h3>
                <div className="skills-box">
                    <div className="skills-content">
                        {/* <div className="progress"> */}
                            <h3>Communication <span>83%</span></h3>
                            <div className="bar"><span className='bar6'></span></div>
                        {/* </div> */}
                        {/* <div className="progress"> */}
                            <h3>Leadership <span>90%</span></h3>
                            <div className="bar"><span className='bar7'></span></div>
                        {/* </div> */}
                        {/* <div className="progress"> */}
                            <h3>Public Speaking<span>70%</span></h3>
                            <div className="bar"><span className='bar8'></span></div>
                        {/* </div> */}
                        {/* <div className="progress"> */}
                            <h3>Decision-Making <span>77%</span></h3>
                            <div className="bar"><span className='bar9'></span></div>
                        {/* </div> */}
                        {/* <div className="progress"> */}
                            <h3>Team-Work <span>90%</span></h3>
                            <div className="bar"><span className='bar10'></span></div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
