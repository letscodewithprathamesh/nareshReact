import React from 'react'
import './App.css'
import Modal from './Modal.jsx'
import { useState } from 'react'

export default function App() 
{

  const [open,setOpen]=useState(false)


  return (
    <div>
      <div className='App'>
        <h1>Hey Click on this Button </h1>
        <button className='button1' onClick={()=>{setOpen(true)}}>OPEN</button>
        {open && <Modal close={()=>{setOpen(false)}}/>}
      </div>
    </div>
  )
}
