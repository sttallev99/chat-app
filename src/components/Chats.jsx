import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { AuthConntext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { db } from '../firebase'
import Loader from './Loader'

const Chats = () => {
  const [loading, setLoading] = useState(true)

  const [chats, setChats] = useState([])

  const { currentUser } = useContext(AuthConntext)
  const { dispatch } = useContext(ChatContext)

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
        setChats(doc.data())
        setLoading(false)
        return () => {
          unsub()
        }
      })
    }
    console.log(currentUser.uid)
    currentUser.uid && getChats()
  }, [currentUser.uid])

  const handleSelect = (u) => {
    dispatch({ type: 'CHANGE_USER', payload: u })
  }

  const entries = Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date)

  return (
    <div className="chats">
      {loading ? (
        <Loader />
      ) : entries?.length ? (
        entries.map((chat) => (
          <div
            className="userChat"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="userChatInfo">
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))
      ) : (
        <p style={{ textAlign: 'center' }}>{'You have no friends :('}</p>
      )}
    </div>
  )
}

export default Chats
