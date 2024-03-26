import AccordinItem from "./AccordinItem.jsx";
import React, { useState } from "react"

function Accordin(props)
{
    const[openIndex,setOpenIndex]=useState(null)

    const update=(index)=>
    {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index ) );
        
    }

    return(
        <div>
            {
               props.items.map((obj,index)=>(
                <AccordinItem title={obj.title} context={obj.context} openIndex={openIndex===index} update={update} key={index} index={index}/>
               ))
            }
           
        </div>
       
    )
}
export default Accordin;