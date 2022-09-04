import React from 'react'
import './content.css'
import { Animated } from 'react-animated-css'

export const About = () => {
  return (
    <div className='about'>
      <Animated className='row'>
        <h2>Me</h2>
        <div className='dates'>
          <p>BirthDate: January 23th - 2003</p>
          <p>BirthPlace: Sakartvelo,Zestafoni</p>
        </div>
        <p className='me'>I am energetic,ambitious person. always Motivated to learn new skills</p>
      <div className='dot'></div>
      </Animated>
      <Animated className='row' animationInDelay="200">
        <h2>Education</h2>
        <p>Georgia,Zestafoni #6 Public school (2009 - 2021)</p>
        <p>Business and Technology University - Information technology faculty
          2021 - Now</p>
      <div className='dot'></div>
      </Animated>
    </div>
  )
}
