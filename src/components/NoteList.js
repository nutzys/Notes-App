import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NoteList = () => {
  return (
    <div className='note-list'>
      <Note/>
      <Note/>
      <AddNote/>
    </div>
  )
}

export default NoteList
