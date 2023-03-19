import React, { useContext } from 'react'
import { AuthConntext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext';

import ProfilePicture from '../img/profilePicture.jpg'

const Message = ({message}) => {
  const {currentUser} = useContext(AuthConntext);
  const {data} = useContext(ChatContext);

  console.log(message)
  return (
    <div className='message owner'>
      {/* <div className="messageInfo">
        <img src={ProfilePicture} alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={ProfilePicture} alt="" />
      </div> */}
    </div>
  )
}

export default Message