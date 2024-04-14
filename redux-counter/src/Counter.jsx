import React from 'react'
import { increment,decrement } from './action'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() 
{
    const count=useSelector((state)=>state.count)
    const dispatch=useDispatch()


  return (
    <div>
        <h1 style={{color:'green'}}>Count:{count}</h1>
        <button onClick={()=>{dispatch(increment())}}>+</button>
        <button onClick={()=>{dispatch(decrement())}}>-</button>
    </div>
  )
}

{/*
 


here useSelector and useDispatch both are hooks provided by react-redux , for using redux functionality from react-redux library into our react application

useSelector is used for accessing the global value provided by the store inside our application ,it will take an callback function
const count=useSelector((state)=>state.count) ===> (state) will consist of state object provide by the store and accessing the state whichever you want here Im accessing count like state.count
define- This hook allows you to extract data from the Redux store state. You pass a selector function as an argument to useSelector, and it returns the selected state value. Whenever the Redux store state changes and the selected value derived from it changes, your component will re-render.

useDispatch it is hook which used to trigger action creator
define-This hook returns a reference to the dispatch function provided by the Redux store. You can use it to dispatch actions to update the Redux store state.
const dispatch=useDispatch()

*/}