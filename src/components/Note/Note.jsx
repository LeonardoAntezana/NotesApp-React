import { useNotesContext } from '../../context/ContextNotesProvider/ContextNotesProvider'
import { AiFillDelete } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'

function Note({note, modalOn}) {
    const {deleteNote, modNote} = useNotesContext()
    const {id, title, content} = note
    const modify = id => {
        modNote(id)
        modalOn()
    }
    return (
    <div className='note'>
        <div className='note__info'>
            <h3 className='note__title'>{title}</h3>
            <p className='note__content'>{content}</p>
        </div>
        <div className='note__container__buttons'>
            <button onClick={() => modify(id)} className='button__note btn__mod'><MdModeEdit/></button>
            <button onClick={() => deleteNote(id)} className='button__note btn__delete'><AiFillDelete/></button>
        </div>
    </div>
  )
}

export default Note