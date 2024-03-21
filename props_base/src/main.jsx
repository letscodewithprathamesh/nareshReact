import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Parent1 from './Parent1.jsx';

let root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <Parent1 />
  </div>
    
)
