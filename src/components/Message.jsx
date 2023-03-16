import React from 'react'

import ProfilePicture from '../img/profilePicture.jpg'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={ProfilePicture} alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={ProfilePicture} alt="" />
      </div>
    </div>
  )
}

export default Message