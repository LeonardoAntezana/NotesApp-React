import { useNotesContext } from '../../context/ContextNotesProvider/ContextNotesProvider'
import { AiFillDelete } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'
import styles from './Note.module.scss'

function Note({note, modalOn}) {
    const {deleteNote, modNote} = useNotesContext()
    const {id, title, content} = note
    const modify = id => {
        modNote(id)
        modalOn()
    }
    return (
    <div className={styles.note}>
        <div className={styles.info}>
            <h3 className={styles.title}>{title}</h3>
            <p>{content}</p>
        </div>
        <div className={styles.container__buttons}>
            <button onClick={() => modify(id)} className={styles.btn__mod}><MdModeEdit/></button>
            <button onClick={() => deleteNote(id)} className={styles.btn__delete}><AiFillDelete/></button>
        </div>
    </div>
  )
}

export default Note