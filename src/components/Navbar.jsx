import React from 'react'
import { signOut } from 'firebase/auth'

import profilePicture from '../img/profilePicture.jpg'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Uni chat</span>
      <div className="user">
        <img src={profilePicture} alt="" />
        <span>George</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
