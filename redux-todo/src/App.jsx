import React, { useState } from 'react'
import './App.css'
import { ADDTODO,DELETETODO,TOGGLE } from './Redux/action'
import { useDispatch, useSelector } from 'react-redux'

export default function App()
{

  const [text,todoText]=useState("")

  const dispatch=useDispatch();

  const todolist=useSelector((state)=>state.todo)


  return (
    <div>
      <input type="text"  onChange={(e)=>{todoText(e.target.value)}}/>
      <button onClick={()=>{dispatch(ADDTODO(Math.round(Math.random()*10),text))}}>ADD</button>

      {todolist && todolist.map((n,i)=>(
        <h1 key={i}>{n.text} <button onClick={()=>{dispatch(DELETETODO(n.id))}}>DELETE</button></h1>
      ))}
    </div>
  )
}
