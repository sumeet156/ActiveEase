import React from 'react'
import img from '../images/hero.jpg';
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
        <img src={img}/>
    </div>
  )
}

export default Hero;