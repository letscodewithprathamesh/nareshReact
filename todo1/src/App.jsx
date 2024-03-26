import { useState } from "react";

function App()
{

  const[text,Settext]=useState([]);
  const[values,SetValue]=useState('');

  const change=()=>
  {

    if (values.trim() === '')
     {
      alert("Please Enter Something");
   } 
    else
    {
      Settext([...text,values]) //Settext function will keep the old values and update the new value to the Array name "text" thats why while writing Settext() function we provide [] which will take old value as spread operator and new value provide by user
      SetValue('') //it will set the values to empty string after value gets updates.
    }
  }

  const remove=(index)=>{
    text.splice(index,1);
    Settext([...text])
  }
  return(
    <div className="todo"> 
      <h1>TODO LIST</h1>
      <div className="insert_col">
        <input type="text"  value={values} onChange={(event)=>{SetValue(event.target.value)}} />
        <button onClick={change} >Submit</button>
      </div>
      <div className="list">
      <ol>
        {text.map((t,i)=>(
           
            <li key={i}>{t} <button id="delete" onClick={()=>remove(i)}>❌</button></li>
    
        )
        )}
        </ol>
      </div>

    </div>
  )
 
}

export default App;