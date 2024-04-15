import React, { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo,deleteTodo } from './RTK/store'

export default function App() 
{

  const [texts,setText]=useState("")
  const dispatch=useDispatch()

  const todo=useSelector((state)=>state.todos)

  const handleAddTodo=()=>{
    const newTodo={
      id:Math.round(Math.random()*1000),
      text:texts,
    }
    dispatch(addTodo(newTodo))
  }

  const handleDeleteTodo=(id)=>{
    dispatch(deleteTodo(id))

  }


  return (
    <div>
      <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
      <button onClick={handleAddTodo}>ADD</button>
      {todo && todo.map((todoss,i)=>(
        <div key={i}>{todoss.text} <button onClick={()=>{handleDeleteTodo(todoss.id)}}>DELETE</button></div>
      ))}

    </div>
  )
}
