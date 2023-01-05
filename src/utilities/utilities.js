import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const validarDatos = (inputText, inputTextArea) => {
    return inputText !== '' && inputTextArea !== ''
}

export const messaje = (text) => 
    toast(text,{
        position: "top-right",
        autoClose: 2000,
        theme: 'dark',
    })