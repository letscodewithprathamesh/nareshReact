import { useState } from "react";
import Todoc from "./Todoc.jsx"

function Todop()
{
    const[text1,Settext1]=useState([]);
    const[text2,Settext2]=useState('');

    const add=()=>
    {
        Settext1([...text1,text2]);
        Settext2('');
    }

    return(
        <div>
            <div>
            <h1>I'm Parent </h1>
            <input type="text" value={text2} onChange={(event)=>{Settext2(event.target.value)}}/>
            <button onClick={add}>Submit</button>
           
            </div>

            <div>
                <ol>
                {
                    text1.map((value,index)=>
                    (
                        <Todoc  key={index} value={value} />
                    ))
                }
                </ol>
              
            </div>

          

        </div>
    )
}

export default Todop    