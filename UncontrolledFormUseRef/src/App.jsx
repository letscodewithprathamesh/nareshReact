import React, { Component, useRef } from 'react'
import MyComponent from './Component.jsx';

export default function App() 
{

  const userRef=useRef();
  const emRef=useRef();
  const pwdRef=useRef();

  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(userRef.current)//it pass the input tag as object same as event handler e.target .we are accessing the value of input tag
    console.log(userRef.current.value,emRef.current.value,pwdRef.current.value);
  }



  return (
    <div>
      <div className="forms">
        <form onSubmit={handlesubmit}>
          <input type="text" ref={userRef} />
          <input type="email" ref={emRef}/>
          <input type="password" ref={pwdRef}/>

          <input type="submit"  />
          </form>
      </div>

      <div className="refexample">
        <MyComponent />
      </div>
    </div>
  )
}
