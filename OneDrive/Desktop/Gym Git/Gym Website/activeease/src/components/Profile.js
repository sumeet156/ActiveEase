import React from 'react'

function Profile(props) {
  return (
    <div className='profile'>
        <img src={props.image}/>
    </div>
  )
}

export default Profile