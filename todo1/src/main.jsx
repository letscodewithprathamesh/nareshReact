import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import Todos from './Todos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<Todos/>  remove any one and use*/}
    <App />
    
  </React.StrictMode>,
)
