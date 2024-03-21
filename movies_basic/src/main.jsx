import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Movies from './Movies.jsx';

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <Movies />
   </React.StrictMode>
)
