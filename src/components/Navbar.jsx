import React, { useContext } from 'react'
import { AuthConntext } from '../context/AuthContext'
import { signOut } from 'firebase/auth'

import profilePicture from '../img/profilePicture.jpg'
import { auth } from '../firebase'

const Navbar = () => {
  const  {currentUser} = useContext(AuthConntext)
  
  return (
    <div className='navbar'>
      <span className='logo'>Uni chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
