import React from 'react'

const AddNote = () => {
  return (
    <div>
      <div className='add-note'>
        <div className='addnote-text'>
            <textarea className='textarea' placeholder='Add a note...'></textarea>
        </div>
        <div className='addnote-actions'>
            <p>200 Remaining</p>
            <button className="add-button">Save</button>
        </div>
        </div>
    </div>
  )
}

export default AddNote
