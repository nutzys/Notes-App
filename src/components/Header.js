import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-title'>
        <h1>Notes App</h1>
      </div>
      <div>
        <input type='text' className='header-input' placeholder='Search a note...'/>
      </div>
    </div>
  )
}

export default Header
