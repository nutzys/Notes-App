import React, { useContext, useState } from 'react'
import {HiSearch} from 'react-icons/hi';
import noteContext from '../store/noteContext';
const Header = () => {
    
  const ctx = useContext(noteContext);
  
  return (
    <div className='header'>
      <div className='header-title'>
        <h1>Notes App</h1>
      </div>
      <div className='filter-bar'>
        <HiSearch/>
        <input type='text' className='header-input' placeholder='Search a note...' onChange={(e) => ctx.filterNotes(e.target.value)}/>
      </div>
    </div>
  )
}

export default Header
