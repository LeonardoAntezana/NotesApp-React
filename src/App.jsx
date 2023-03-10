import { useState } from "react"
import ButtonAdd from "./components/ButtonAdd/ButtonAdd"
import ModalForm from "./components/ModalForm/ModalForm"
import ListNotes from "./components/ListNotes/ListNotes"
import styles from './App.module.scss'
import { ToastContainer } from "react-toastify"

function App() {
  const [showModal, setShowModal, notes] = useState(false)

  const seeModal = () => setShowModal(true)
  
  const noSeeModal = () => setShowModal(false)

  return (
    <div className={styles.App}>
      <ButtonAdd addNote={seeModal}/>
      {showModal && <ModalForm fnCancel={noSeeModal}/>}
      <ListNotes modalOn={seeModal}/>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
