import React, { useState } from 'react'

import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Chats from '../components/Chats'

const Sidebar = () => {
  const [focus, setFocus] = useState(false)
  return (
    <div data-focus={focus} className="sidebar">
      <Navbar />
      <Search {...{ focus, setFocus }} />
      <Chats />
    </div>
  )
}

export default Sidebar
