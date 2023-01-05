import React from 'react'
import ReactDOM from 'react-dom/client'
import ContextNotesProvider from './context/ContextNotesProvider/ContextNotesProvider'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextNotesProvider><App/></ContextNotesProvider>
)
