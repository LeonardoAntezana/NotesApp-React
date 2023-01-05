import { useNotesContext } from "../../context/ContextNotesProvider/ContextNotesProvider"
import Note from "../Note/Note"

function ListNotes({modalOn}) {
    const {notes} = useNotesContext()
    
  if(notes.length === 0){
    return(
        <p>No se encuentran notas!</p>
    )
  }
  return (
    <div>
       {notes.map((note, index) => <Note key={index} note={note} modalOn={modalOn}/>)}
    </div>
  )
}

export default ListNotes