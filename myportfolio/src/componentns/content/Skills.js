import React from 'react'
import { Animated } from 'react-animated-css';
import { FaDotCircle } from "react-icons/fa";

export const Skills = () => {
  const skills = [
    {
      name: "Web Developement",
      tools: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "PHP",
        "Jquery",
        "Bootstrap",
      ],
      additional: [
        "Python",
        "GraphQL",
        "Git"
      ],
      animationStyle: {
        type: "slideInLeft",
        delay: "500"
      }
    },
    {
      name: "Graphic Design",
      tools: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Premiere Pro"
      ],
      additional: [
        "Blender"
      ],
      animationStyle: {
        type: "slideInLeft",
        delay: "700"
      }
    }
  ]
  return (
    <Animated className='component'>
      {skills.map((single) => {
        return (
          <>
            <Animated className='skill-container' animationIn={single.animationStyle.type}
              animationInDuration={single.animationStyle.delay}
            >

              <div className='bot'></div>
              <div className='title'>
                <p className='c-white'>{single.name}</p>
              </div>
              <div className='skills-content'>
                <div className='main col'>
                  {single.tools.map((skill) => {
                    return (
                      <>
                        <p className='c-tools'>{skill}</p>
                      </>
                    )
                  })}
                </div>
                <div className='additional col'>
                  <h3 className='c-white'>Additional</h3>
                  {single.additional.map((add) => {
                    return (
                      <>
                        <p className='c-tools'>
                          {add}
                        </p>
                      </>
                    )
                  })}
                </div>
              </div>
            </Animated>
          </>
        )
      })}
    </Animated>
  )
}
