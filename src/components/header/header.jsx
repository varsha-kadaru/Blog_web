import React from 'react'
import "./header.css"
const header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitleSmall'>React & Node</span>
        <span className='headerTitleBig'>Blog!!</span>
      </div>
      <img className='headerImg' src='https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg' alt='img'/>
    </div>
  )
}

export default header
