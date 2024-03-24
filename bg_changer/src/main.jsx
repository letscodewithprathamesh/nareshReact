import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppClass from './AppClass.jsx'
import ColourSelector from './ColourSelector.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AppClass />
    <ColourSelector />
  </React.StrictMode>,
)
