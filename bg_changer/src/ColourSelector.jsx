import { useState } from "react";


function ColourSelector()
{
    const[bgcolor,SetBgcolor]=useState('#FFFFFF')

 const select=(event)=>{
    SetBgcolor(event.target.value)
    console.log(event.target); 
    console.log(event.target.value);   
    /*the event is send as an object by eventListner (Onchange is HTML event) , the object contains {<input type="color" value="#ad4848">} to select value we use event.target.value (which gives hexadecimal code)
    which we set to SetBgcolor function which changes the state of bgcolor whenever we pick color from Color picker
     */
 }


    return(
        <div className="selectors" style={{backgroundColor:bgcolor}}>
            <h1>Pick a Colour</h1>
            <input type="color" onChange={select} value={bgcolor} id="colors"/>
   
        </div>
    )
}
export default ColourSelector;