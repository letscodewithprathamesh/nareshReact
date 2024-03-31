import React, { useState } from 'react'
import './App.css'

export default function App()
 {

  const [count,setCount]=useState(0);

  return (

    
    <div className='container'>

      <h1>EVEN ODD COUNT</h1>

      <div className='value'>
        <h1>COUNT :{count} </h1>
      </div>

      <div className='evenodd'>
        <h1>{(count==0)?" ":((count%2==0)?(<p style={{color:'green'}}>Count is Even : {count}</p>):(<p>Count is Odd : {count}</p>))}</h1>

      </div>

      <div className='btn'>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <button onClick={()=>{setCount(count-1)}}>-</button>
      </div>

    </div>
  )
}
