import React from 'react'
import img from '../images/hero.jpg';
import './Hero.css'
import Popup from './Popup';


function Hero({login,register, setLogin, setRegister}) {

  console.log(login, register);
  return (
    <div className='hero'>
      <Popup loginState={login} registerState={register} loginUpdate={setLogin} registerUpdate={setRegister}/>
    </div>
  )
}

export default Hero;