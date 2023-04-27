import React, { useContext, useState } from 'react'
import noteContext from '../store/noteContext';
import { nanoid } from 'nanoid';

const AddNote = () => {
    const [note, setNote] = useState('');

    let charLimit = 200;

    const ctx = useContext(noteContext);

    const onSave = (e) => {
        e.preventDefault();
        const date = new Date();
        const data = {
            id: nanoid(),
            title: note,
            date: date.toLocaleDateString(),
        }
        ctx.addNote(data);
    }
  return (
    <div>
      <div className='add-note'>
        <form onSubmit={onSave}>
            <div className='addnote-text'>
                <textarea className='textarea' rows={9} placeholder='Add a note...' onChange={e => setNote(e.target.value)}></textarea>
            </div>
            <div className='addnote-actions'>
                <p>{charLimit - note.length} Remaining</p>
                <button className="add-button" disabled={charLimit - note.length <= 0}>Save</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default AddNote
