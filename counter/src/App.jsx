import { useState } from "react";
import "./App.css"

function App()
{
  {/* To overcome the stateless function and making Stateful by re rendering Components
  let c=0;
  function add()
  {
    c++;
    console.log(c);
  }
*/}

  const [c,setCount]=useState(0);
  function add()
  {
      if(c<25)
      {
        setCount(c+1)
      }

  }
  {/* this logic is also correct
  function sub()
  {
    setCount(c-1);
    console.log(c);
  } */}
  
  return(
    <div className="counter">
      <p>Count : {c}</p>
      <div className="button">
      <button onClick={()=>{add()}}  disabled={c===25}>INCREMENT</button>
      <button onClick={()=>{if(c>0){setCount(c-1)}}} disabled={c===0}>DECREMENT</button>
      <button onClick={()=>{setCount(0)}}>RESET</button>

      </div>
    </div>
  )
}

export default App