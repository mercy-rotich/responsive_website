import React from 'react'
import'./Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
<div className="hero-text">
    <h1>We ensure better education for a better world</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda recusandae tempora vitae beatae labore quidem sequi sapiente velit. Commodi natus ex sapiente nam.</p>
    <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
</div>
    </div>
  )
}

export default Hero