import React, { useContext, useState } from 'react'
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  serverTimestamp,
  updateDoc,
  getDoc,
} from 'firebase/firestore'
import { db } from '../firebase'

import profilePicture from '../img/profilePicture.jpg'
import { AuthConntext } from '../context/AuthContext'
import { useWindowSize } from '../hooks/useWindowSize'

const Search = (props) => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const { currentUser } = useContext(AuthConntext)

  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'),
      where('displayName', '==', username)
    )

    try {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      })
    } catch (err) {
      setErr(true)
    }
  }

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch()
  }

  const handleSelect = async (e) => {
    props.setFocus(false)
    //check whether the group(chats in firestore) exist, if not create
    console.log(user)
    console.log(currentUser)
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid
    console.log(combinedId)

    try {
      const response = await getDoc(doc(db, 'chats', combinedId))

      if (!response.exists()) {
        //create chat is chats collection
        await setDoc(doc(db, 'chats', combinedId), { messages: [] })

        //create user chats
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [combinedId + '.userInfo']: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        })
        await updateDoc(doc(db, 'userChats', user.uid), {
          [combinedId + '.userInfo']: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        })
      }
    } catch (err) {}

    setUser(null)
    setUsername('')
    //create user chats
  }

  const size = useWindowSize()

  return (
    <div className="search">
      <div className="searchForm">
        <input
          onFocus={() => props.setFocus(true)}
          onBlur={() => props.setFocus(false)}
          type="text"
          placeholder={size.width <= 480 ? '🔎' : 'Find a user'}
          data-mobile-placeholder="🔎"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
