import React from 'react'
import './header.css'
import clouds from '../../assets/clouds_top.png'

const Header = () => {
  return (
    <>
      <div className='header-wrapper'>
        <h1>Connor Claxton</h1>
        <h3>
          Software developer with a focus on both the frontend and backend
        </h3>
        <ul>
          <li>Resume</li>
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>Contact</li>
        </ul>
      </div>
      <img className='cloud' alt='' src={clouds} />
    </>
  )
}

export default Header
