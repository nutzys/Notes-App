import React from 'react'
import {HiTrash} from 'react-icons/hi';
const Note = () => {
  return (
    <div className='note'>
      <div className='note-text'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quas.</p>
      </div>
      <div className='note-actions'>
        <p>10/12/2020</p>
        <button><HiTrash className='hi-trash'/></button>
      </div>
    </div>
  )
}

export default Note
