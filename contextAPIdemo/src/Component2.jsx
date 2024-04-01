import React, { useContext } from 'react'
import { UserContext } from './App.jsx'

export default function ()
 {

    const {mode,text}=useContext(UserContext)

  return (
    <div className='context' >
      <h1 >Component2</h1>
      <div style={{backgroundColor:mode}}>
        <h1 style={{color:text}}>Im REACT DEVELOPER</h1>
      </div>



    </div>
  )
}
