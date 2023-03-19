import React, { useContext } from 'react'
import { AuthConntext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext';

import ProfilePicture from '../img/profilePicture.jpg'

const Message = ({message}) => {
  const {currentUser} = useContext(AuthConntext);
  const {data} = useContext(ChatContext);

  console.log(message)
  return (
    <div className={`message ${message.senderId === currentUser.uid && 'owner'}`}>
      <div className="messageInfo">
        <img 
          src={message.senderId == currentUser.uid 
            ? currentUser.photoURL 
            : data.user.photoURL
          } 
          alt="" 
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  )
}

export default Message