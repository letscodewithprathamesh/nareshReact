import React from 'react'
import { useState } from "react";
import './Project2.css'

export default function Project2() {
 
  const [c,setCount]=useState(0);
  function add()
  {
      if(c<25)
      {
        setCount(c+1)
      }

  }
  
  return(
    <div className="counter">
      <p>Count : {c}</p>
      <div className="buttons">
      <button onClick={()=>{add()}}  disabled={c===25}>INCREMENT</button>
      <button onClick={()=>{if(c>0){setCount(c-1)}}} disabled={c===0}>DECREMENT</button>
      <button onClick={()=>{setCount(0)}}>RESET</button>

      </div>
    </div>
  )
}

