const { createContext, useState } = require("react");


const noteContext = createContext();

export function NoteProvider({children}){
    
    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
        setNotes(prevState => [...prevState, note]);
    }
    
    return (
        <noteContext.Provider value={{ notes, addNote }}>
            {children}
        </noteContext.Provider>
    )
}

export default noteContext;