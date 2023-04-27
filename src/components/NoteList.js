import React, { useContext } from 'react'
import Note from './Note'
import AddNote from './AddNote'
import noteContext from '../store/noteContext'

const NoteList = () => {

  const ctx = useContext(noteContext);

  return (
    <div className='note-list'>
      {ctx.notes.map(item => (<Note key={item.id} id={item.id} title={item.title} date={item.date}/>))}
      <AddNote/>
    </div>
  )
}

export default NoteList
