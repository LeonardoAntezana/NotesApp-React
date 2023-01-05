import { React, createContext, useState, useEffect, useContext } from 'react'
import { validarDatos , messaje} from '../../utilities/utilities'

const NotesContext = createContext()

export const useNotesContext = () => useContext(NotesContext)

function ContextNotesProvider({children}) {
    const [note, setNote] = useState({title: '', content: ''})
    const [notes, setNotes] = useState([])
    const [notePrev, setNotePrev] = useState(null)
    const [idNote, setIdNote] = useState(1)

    useEffect(()=> {
      let localS = JSON.parse(localStorage.getItem('notes'))
      localS && setNotes([...localS])
      let idNote = JSON.parse(localStorage.getItem('noteId'))
      localS && localS.length === 0 ? setIdNote(1) : setIdNote(idNote)
    }, [])

    useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes))
      localStorage.setItem('noteId', JSON.stringify(idNote))
    },[notes, idNote])

    const clear = () => setNote({title: '', content: ''})

    const addNote = (title, text) => {
      if(validarDatos(title, text)){
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
          messaje('Nota agregada')
        }
        clear()
        setIdNote( idNote + 1)
      }
      else{
        messaje('Nada que guardar!')
      }
    }
    
    const deleteNote = id => {
      setNotes(notes.filter(note => note.id !== id))
      messaje('Nota eliminada!')
    }

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