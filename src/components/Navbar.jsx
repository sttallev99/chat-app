import React from 'react'
import profilePicture from '../img/profilePicture.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Uni chat</span>
      <div className="user">
        <img src={profilePicture} alt="" />
        <span>George</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
