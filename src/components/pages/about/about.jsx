import React from 'react'
import "./about.css"

const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className='sidebarTitle'>ABOUT ME</span>
        <img className="sidebarImg" src='https://upload.wikimedia.org/wikipedia/commons/9/91/Boki-avatar.jpg' alt=''/>
        <p>
          
        I am a first year CSE student at JNTUHCEH.<br/>I'm a responsible,organised and innovative student with a get it
         done approach.<br/>Being punctual,disciplined and collabarative are my biggest strengths.
                    
        </p>
        <div>
          <br/>
          <h2>Education</h2> 
            <p><b>Bachelor of Technology</b><br/>
            Jawaharlal Nehru Technological University,Hyderabad</p>
            <p><b>Intermediate</b><br/>
            Sri Chaitanya Junior Kalasala<br/>
            Percentage:97.8%</p>
            <p><b>Secondary School Certificate</b><br/>
            Ssi Sai Model School,Medipally<br/>
            CGPA:10</p>
                    </div>
      
      <div>
          <h2>Skills</h2>
          <li>C Programming</li>
          <li>Python Programming</li>
          <li>C++</li>
          <li>HTML</li>
          <li>Cascading Style Sheets(CSS)</li>
          <li>JavaScript</li>
          <li>Mongodb</li>
          <li>React Js</li>
          <li>Node js</li>
          <li>Express Js</li>
                    </div>
                    </div>
      
      <div className="sidebarItem">
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-youtube"></i>
        </div>
      </div>
    </div>
  )
}

export default sidebar
