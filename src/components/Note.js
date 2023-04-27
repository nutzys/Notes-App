import React, { useContext } from 'react'
import {HiTrash} from 'react-icons/hi';
import noteContext from '../store/noteContext';
const Note = ({title, date, id}) => {

  const ctx = useContext(noteContext);

  return (
    <div className='note'>
      <div className='note-text'>
        <p>{title}</p>
      </div>
      <div className='note-actions'>
        <p>{date}</p>
        <button onClick={() => ctx.deleteNote(id)}><HiTrash className='hi-trash'/></button>
      </div>
    </div>
  )
}

export default Note
