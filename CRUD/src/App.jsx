import React, { useState } from 'react'
import Movies from './Movies.jsx'
import Form from './Form.jsx'

export default function App() 
{

  const[formOpen,setFormopen]=useState(false);

  const openform=()=>{
    setFormopen(true)
  }

  const closeform=()=>{
    setFormopen(false)
  }



  return (
    <>
   <button className="flex items-center justify-center p-10 bg-neutral-50 text-black hover:bg-blue-700 hover:text-white h-10" onClick={openform}>
    ADD New
</button>

    <div className=' bg-black text-white  p-10 '>
      <Movies />
      <Form  isOpen={formOpen} isClose={closeform}/>
    </div>
    </>
  )
}
