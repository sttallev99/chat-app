import React from 'react'

import profilePicture from '../img/profilePicture.jpg'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src={profilePicture} alt="" />
        <div className="userChatInfo">
          <span>George</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={profilePicture} alt="" />
        <div className="userChatInfo">
          <span>George</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={profilePicture} alt="" />
        <div className="userChatInfo">
          <span>George</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={profilePicture} alt="" />
        <div className="userChatInfo">
          <span>George</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats