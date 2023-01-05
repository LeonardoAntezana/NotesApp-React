import React from 'react'
import styles from './ButtonAdd.module.scss'

const ButtonAdd = ({addNote}) => {
    return(
        <>
            <img className={styles.btn__addNote} onClick={addNote} src="https://cdn3.iconfinder.com/data/icons/glypho-office-and-business/64/notepad-plus-512.png" alt="addNote" />
        </>
    )
}

export default ButtonAdd