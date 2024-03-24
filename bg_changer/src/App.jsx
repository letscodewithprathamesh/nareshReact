import { useState } from "react"
import "./App.css"
function App()
{
  const [background,setBackground]=useState('#000000')

  function changer()
  {
    console.log(Math.round(Math.random()*10000000).toString(16));

    const random_color="#"+Math.round(Math.random()*10000000).toString(16);
    console.log(random_color);

    setBackground(random_color)

  }

  return(
    <div className="change" style={{backgroundColor:background}}>
      <button onClick={changer} style={{color:background}}>CHANGE</button>
      <h1>FUNCTION COMPONENT</h1>
    </div>
  )
}

export default App;