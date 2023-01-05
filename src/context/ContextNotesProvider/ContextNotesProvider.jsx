import { React, createContext, useState, useContext } from 'react'

const NotesContext = createContext()

export const useNotesContext = () => useContext(NotesContext)

function ContextNotesProvider({children}) {
    const [note, setNote] = useState({title: '', content: ''})
    const [notes, setNotes] = useState([])
    const [notePrev, setNotePrev] = useState(null)
    const [idNote, setIdNote] = useState(1)

    const clear = () => setNote({title: '', content: ''})

    const addNote = (title, text) => {
      if(notePrev !== null){
        console.log(notePrev)
        let noteSearch = notes.find(note => note.id === notePrev.id)
        noteSearch.title = title
        noteSearch.content = text
        setNotes([...notes])
        setNotePrev(null)  
      }
      else{
        setNotes([...notes, {id: idNote, title: title, content: text}])
      }
      clear()
      setIdNote( idNote + 1)
    }
    
    const deleteNote = id => setNotes(notes.filter(note => note.id !== id))
    
    const modNote = id => {
      let noteSearch = notes.find(note => note.id === id)
      setNote(state => ({title: noteSearch.title, content: noteSearch.content}))
      setNotePrev({...noteSearch})
    }
  return (
    <NotesContext.Provider value={{note, setNote, notes, addNote, clear, deleteNote, modNote}}>
        {children}
    </NotesContext.Provider>
  )
}

export default ContextNotesProvider