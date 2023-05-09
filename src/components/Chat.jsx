import React, { useContext } from 'react'

import Cam from '../img/cam.png'
import Add from '../img/addFriend.png'
import More from '../img/more.png'
import Messages from '../components/Messages'
import Input from '../components/Input'
import { ChatContext } from '../context/ChatContext'

const Chat = () => {
  const { data } = useContext(ChatContext)
  const show = data.user?.displayName
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      {show ? (
        <>
          <Messages />
          <Input />
        </>
      ) : (
        <p className="choose-chat-partner">
          Click on any chat bubble to start chatting!
        </p>
      )}
    </div>
  )
}

export default Chat
