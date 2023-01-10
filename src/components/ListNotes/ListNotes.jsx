import { useNotesContext } from "../../context/ContextNotesProvider/ContextNotesProvider"
import Note from "../Note/Note"
import styles from './ListNotes.module.scss'

function ListNotes({modalOn}) {
    const {notes} = useNotesContext()
    
  if(notes.length === 0){
    return(
        <p className={styles.cero__notes}>No se encuentran notas!</p>
    )
  }
  return (
    <div className={styles.container__notes}>
        <div className={styles.grid__notes}>
          {notes.map((note, index) => <Note key={index} note={note} modalOn={modalOn}/>)}
        </div>
    </div>
  )
}

export default ListNotes