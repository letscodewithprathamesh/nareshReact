import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

export default function App() 
{
  const [hr,sethr]=useState(0);
  const [min,setmin]=useState(0);
  const [sec,setsec]=useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (timerRunning) 
    {
      intervalId = setInterval(() => 
      {
        if (sec > 0 && sec<=60) 
        {
          setsec(sec - 1);
        } 
        else 
        {
          if (min > 0 && min<=60) 
          {
            setmin(min - 1);
            setsec(59);
          }
          else 
          {
            if (hr > 0) {
              sethr(hr - 1);
              setmin(59);
              setsec(59);
            } 
            else 
            {
              clearInterval(intervalId);
              setTimerRunning(false);
            }
          }
        }
      }, 1000);
    } 
    else
    {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId); // Cleanup function
  }, [timerRunning, hr, min, sec]);

  const start = () => {
    setTimerRunning(true);
  };

  const pause=()=>{
    setTimerRunning(false);
  }


  return (
    <div>
      <div className='countcontainer'>
        <div className='countvalue'>
        <h1>COUNTDOWN TIMER</h1>
          
          <input type="text" value={hr!==0?hr:""} onChange={(e)=>{sethr(e.target.value)}} placeholder='Enter Hours'/>
          
          <input type="text" value={min!==0?min:""} onChange={(e)=>{if(e.target.value>=61){alert("Please enter less than 60 ")}else{setmin(e.target.value)}}} placeholder='Enter Minutes'/>
         
          <input type="text" value={sec!==0?sec:""} onChange={(e)=>{if(e.target.value>=61){alert("Please enter less than 60 ")}else{setsec(e.target.value)}}} placeholder='Enter Sec'/>
       
        </div>

        <div className='countbutton'>
        <button id='start' onClick={start}>START</button>
          <button id='pause' onClick={pause}>PAUSE</button>
          <button id='reset' onClick={()=>{sethr(0) ;setmin(0);setsec(0)}}>RESET</button>
        </div>

        <div className='countview'>
      <h1>{hr}</h1>
      <h1>{min}</h1>
      <h1>{sec}</h1>
       </div>
      </div>
    </div>
  )
}

