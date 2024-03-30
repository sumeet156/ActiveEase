import React from 'react'
import img from '../images/hero.jpg';
import './Hero.css'
import Popup from './Popup';


function Hero({login,register}) {

  console.log(login, register)
  return (
    <div className='hero'>
      <Popup loginState={login} registerState={register}/>
    </div>
  )
}

export default Hero;