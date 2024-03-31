import React from 'react'
import './MainCard.css'

function MainCard(props) {
  return (
    <div className='maincard'>
        <h2>{props.heading}</h2>
        <div className='card-list'>
        {props.children}
        </div>
            
    </div>
  )
}

export default MainCard