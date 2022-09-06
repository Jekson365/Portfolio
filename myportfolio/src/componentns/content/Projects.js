import React from 'react'
import { Animated } from 'react-animated-css'
import image_1 from './images/image-1.PNG'
import image_2 from './images/image-2.PNG'
import image_3 from './images/image-3.PNG'
import image_4 from './images/image-4.PNG'
import image_5 from './images/image-5.PNG'
import image_6 from './images/image-6.PNG'

import { FaJs,FaReact } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {

      name: "Tic Tac Toe",
      dur:"400",
      img: image_1,
      url: "https://whimsical-cheesecake-bb398d.netlify.app/",
      tool:<FaJs/>
    },
    {
      name: "Catch pink!",
      dur:"700",
      img: image_2,
      url: "https://reliable-lily-985d25.netlify.app/",
      tool:<FaJs/>
    },
    {
      name: "Restaurant",
      dur:"1000",
      img: image_5,
      tool:<FaReact/>,
      url: "https://festive-sinoussi-ba0e6c.netlify.app/"
    },
    {
      name: "Managment",
      dur:"1300",
      tool:<FaReact/>,
      img: image_4,
      url: "https://harmonious-selkie-778daf.netlify.app/"
    },
    {
      name: "NFT collection",
      dur:"1600",
      tool:<FaReact/>,
      img: image_6,
      url: "https://zealous-heyrovsky-9609d4.netlify.app/"
    },
    {
      dur:"1900",
      name: "Todo App",
      img: image_3,
      tool:<FaReact/>,
      url: "https://roaring-palmier-fd8bed.netlify.app/"
    }

  ]
  return (
    <Animated className='projects'>
      <Animated className='circle pro' animationInDuration='3000'></Animated>
      <Animated className='circle pro' animationInDuration='2000'></Animated>
      <Animated className='circle pro' animationInDuration='1000'></Animated>
      {projects.map((single) => {
        return (
          <>
            <Animated className='box' animationInDuration={single.dur} animationIn="slideInUp">
              <a href={single.url}>
                <img src={single.img} />
              </a>
              <div className='tag-name'>
                <p>{single.name}</p>
                {single.tool}
              </div>
            </Animated>
          </>
        )
      }
      )
      }
    </Animated >
  )
}

export default Projects