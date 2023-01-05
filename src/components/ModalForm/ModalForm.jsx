import { useNotesContext } from "../../context/ContextNotesProvider/ContextNotesProvider"

function ModalForm({fnCancel}) {
  const {note, setNote, addNote, clear} = useNotesContext()

  const handleclickCancel = () => {
    fnCancel()
    clear()
  }

  const handleClickConfirm = () => {
    fnCancel()
    addNote(note.title, note.content)
  }

  return (
    <div className="container__modal">
            <div className='modal'>
                <input type="text" value={note.title} onChange={(e) => setNote(state => ({...state, title: e.target.value}))}/>
                <textarea value={note.content} onChange={(e) => setNote(state => ({...state, content: e.target.value}))} cols="30" rows="10"></textarea>
                <div className='buttons__modal'>
                    <button className='btn__cancel__modal' onClick={handleclickCancel}>Cancelar</button>
                    <button className='btn__confirm__modal' onClick={handleClickConfirm}>Confirmar</button>
                </div>
            </div>
        </div>
  )
}

export default ModalForm