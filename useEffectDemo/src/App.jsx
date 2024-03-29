import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function App() 
{
    const [count,Setcount]=useState(0)

    useEffect(()=>{
        console.log("count state changed without dependencies");
       alert("Hello")
    })

    useEffect(()=>{
        console.log("count state changed empty array depencies");
    },[])


    
    useEffect(()=>{
        console.log("count state changed with dependencies ");
    },[count])

  return (
    <div>
        <h1>COUNT : {count}</h1>
        <button onClick={()=>{Setcount(count+1)}}>INC</button>
        <button onClick={()=>{Setcount(count-1)}}>DEC</button>
    </div>
  )
}
