import React, { useMemo, useRef, useState } from 'react'
import Count from './Count';

export default function App() 
{


  {/*  THIS IS AN EXPENSIVE FUNCTION TO OVERCOME THIS WE USE 'useMemo()' 
   const [factdata,setFactdata]=useState(1)
  const[count,setCount]=useState("")

  const factorial=()=>{
    console.log("Expensive Function ");
    console.log(count);
    let f=1;
    for(let i=1;i<=count;i++)
    {
      f=f*i;
    }
    setFactdata(f)
  }
 */}

  const [factdata,setFactdata]=useState(1)
  const[count,setCount]=useState("")
  const inpref=useRef();

  const factorial=()=>{
    console.log("Expensive Function ");
    console.log(count);
    let f=1;
    for(let i=1;i<=count;i++)
    {
      f=f*i;
    }
    setFactdata(f)
  }

  useMemo(()=>{factorial()},[count]) 
  {/* using the memo it will store the value only if the count which is dependency change it will trigger the expensive function */}


  return (
    <div>
      <div>
        <input type="text"  ref={inpref}  /><br />
        <button onClick={()=>{setCount(inpref.current.value)}}>Click me</button>
        {factdata}
      </div>
      <Count />
    </div>
  )
}
