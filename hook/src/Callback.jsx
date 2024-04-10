import React, { useState } from 'react'
import { useCallback } from 'react';
import Callback1 from './Callback1';

export default function Callback() 
{

    const [countOne,setCountone]=useState(0);
    const [countTwo,setCounttwo]=useState("nana")

    const result=useCallback(()=>{console.log("Callback working");},[countTwo])
    
  return (
    <div>
        {/* issue we are updating count value then also child component is getting render ,to stop this we use useCallback ,It will render only when dependencies update else it wont render
         const [countOne,setCountone]=useState(0);
    
  return (
    <div>
        
        <button onClick={()=>{setCountone(countOne+1)}}>INCR</button>
        <h1>Parent Component : {countOne}</h1>
        <Callback1 />
      
    </div>
  ) */}
        
        <button onClick={()=>{setCountone(countOne+1)}}>INCR</button>
        <h1>Parent Component : {countOne}</h1>
        <Callback1 counterTwo={countTwo} result={result}/>
      
    </div>
  )
}
