import React from 'react'

const ButtonAdd = ({addNote}) => {
    return(
        <>
            <img className='btn__addNote' onClick={addNote} src="https://cdn3.iconfinder.com/data/icons/glypho-office-and-business/64/notepad-plus-512.png" alt="addNote" />
        </>
    )
}

export default ButtonAdd