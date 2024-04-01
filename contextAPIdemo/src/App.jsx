import React, { createContext} from 'react'
import { useState } from 'react'
import Component from './Component.jsx'
import './App.css'


export const UserContext=createContext()

export default function App() 
{

  const[mode,setMode]=useState("")
  const[text,settext]=useState("")
  const[dark,setdark]=useState(true)

  const toggleColor =()=>{
    console.log(dark);
    setdark((prevMode)=>!prevMode);//not understanding
    console.log(dark);
    dark?(setMode('black'),settext('white')):(setMode('white'),settext('black'));
  }



  return (
    <div className='App' >
    <UserContext.Provider value={{mode,text}} >
      <button onClick={toggleColor} style={{backgroundColor:mode,color:text}}>{dark?("Light Mode"):("Dark Mode")}</button>
      <h1>APP</h1>
      <Component />
    </UserContext.Provider>
    </div>


  )
}
