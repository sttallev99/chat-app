import React from 'react'

import profilePicture from '../img/profilePicture.jpg'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src={profilePicture} alt="" />
        <div className="userChatInfo">
          <span>George</span>
        </div>
      </div>
    </div>
  )
}

export default Search