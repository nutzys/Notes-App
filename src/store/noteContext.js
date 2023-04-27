import { nanoid } from "nanoid";

const { createContext, useState } = require("react");


const noteContext = createContext();

export function NoteProvider({children}){

    const date = new Date();

    //Dummy notes
    const noteList = [
        {
            id: nanoid(),
            title: 'First sticky note!',
            date: date.toLocaleDateString(),
        },
        {
            id: nanoid(),
            title: 'Second sticky note!',
            date: date.toLocaleDateString(),
        },
        {
            id: nanoid(),
            title: 'Third sticky note!',
            date: date.toLocaleDateString(),
        },
        {
            id: nanoid(),
            title: 'Fourth sticky note!',
            date: date.toLocaleDateString(),
        },
    ]

    const [notes, setNotes] = useState(noteList);

    const addNote = (note) => {
        setNotes(prevState => [...prevState, note]);
    }

    const deleteNote = (id) => {
        setNotes(notes.filter(item => item.id !== id));
    }

    const filterNotes = (indicator) => {
        setNotes(notes.filter(item => item.title.toLowerCase().includes(indicator)));
    }

    return (
        <noteContext.Provider value={{ notes, addNote, deleteNote, filterNotes }}>
            {children}
        </noteContext.Provider>
    )
}

export default noteContext;