import React from 'react'
import './About.css'
import about_icon from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about' id='about'>
          <div className="about-left">
            <img src={about_icon} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
          </div>
          <div className="about-right">
         <h3>ABOUT OUR UNIVERSITY</h3>
         <h2>Nurturing Tommorow's Leaders Today</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea aliquam aliquid totam beatae voluptatibus culpa blanditiis nihil perspiciatis voluptate ullam ipsa porro illum temporibus consequuntur quos, veritatis quas neque officiis eos. Laudantium quia quasi perferendis.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia modi dignissimos ea iste iusto est earum esse odio repudiandae possimus.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium a, fuga, autem doloremque laborum perspiciatis consequuntur, repudiandae quaerat corrupti doloribus nulla! Est accusantium maiores praesentium voluptatibus aliquam rerum?</p>
          </div>
    </div>
  )
}

export default About