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

    if (timerRunning) {
      intervalId = setInterval(() => {
        // Decrease seconds and handle when they reach zero
        if (sec > 0) {
          setsec(sec - 1);
        } else {
          if (min > 0) {
            setmin(min - 1);
            setsec(59);
          } else {
            if (hr > 0) {
              sethr(hr - 1);
              setmin(59);
              setsec(59);
            } else {
              clearInterval(intervalId);
              setTimerRunning(false);
            }
          }
        }
      }, 1000);
    } else {
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
          <h1>Enter Hours</h1>
          <input type="text" value={hr} onChange={(e)=>{sethr(e.target.value)}} />
          <h1>Enter Minutes</h1>
          <input type="text" value={min} onChange={(e)=>{setmin(e.target.value)}}/>
          <h1>Enter seconds</h1>
          <input type="text" value={sec} onChange={(e)=>{setsec(e.target.value)}}/>
       
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

