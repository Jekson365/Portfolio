import React, { useEffect, useState } from 'react'
import { Animated } from 'react-animated-css'
import './content.css'

export const Intro = () => {



  return (
    <>
    <Animated className='circle' animationIn='zoomIn' animationInDelay="100"></Animated>
    <Animated className='circle' animationIn='zoomIn' animationInDelay="300"></Animated>
    <Animated className='circle' animationIn='zoomIn' animationInDelay="600"></Animated>
      <Animated className='intro'>
        <Animated animationIn='slideInLeft' animationInDuration="500">
          <h1 className='hi'>Hello There</h1>
        </Animated>
        <Animated animationIn='slideInUp' animationInDuration="300">
          <h1 className='namee'>I am Jeko</h1>
        </Animated>
        <Animated animationIn='zoomIn' animationInDuration='500'>
          <h1 className='job'>Web Developer</h1>
        </Animated>
      </Animated>
    </>
  )
}
