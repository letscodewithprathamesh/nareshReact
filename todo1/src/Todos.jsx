import { useState } from "react";
import Todo from "./Todo.jsx";

function Todos()
{
    const[text,Settext]=useState([]);
    const[values,SetValue]=useState('');
    const[dummytext,SetDummy]=useState('dummy');
  
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

    const update=(text1)=>
    {
        SetDummy(text1);
    }

    return(
        <div className="todo"> 

        <h1>TODO LIST</h1>

        <div className="insert_col">
          <input type="text"  value={values} onChange={(event)=>{SetValue(event.target.value)}} />
          <button onClick={change} >Submit</button>
        </div>

        {"Update the "+dummytext+" We Send value from child to parent"}
        <div className="list">
        <ol>
          {text.map((t,i)=>(
             
             <Todo task={t} index={i} remove={remove} update={update} />

          )
          )}
          </ol>
        </div>
  
      </div>
    )

}

export default Todos;