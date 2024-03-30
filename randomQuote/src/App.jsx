import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function App() 
{
  const[quote,setQuote]=useState('');
  const[author,setAuthor]=useState('');
  const[btnclick,setbtnclick]=useState(0);
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(()=>{
    axios.get("https://api.quotable.io/random").then((data)=>
    {
      console.log(data) //data is an argument like response see in Promise which gives data object in which all properties are there and inside that there is property name data in which all properties are there like author,id,cotent
      setQuote(data.data.content)
      setAuthor(data.data.author)

    })
  },[btnclick])

 const save=()=>{

  const newQuote={
    quote,author
  };
  setSavedQuotes([...savedQuotes,newQuote])
 }
  
 const deleteQuote=(index)=>{
  savedQuotes.splice(index,1)
  setSavedQuotes([...savedQuotes])
 }
  


  return (
    <>
    

    <div className='quotation'>
      <h1>RANDOM QUOTE</h1>
      <blockquote>{quote}</blockquote>
      <cite>-{author}</cite>
      <div className='quotebtn'>
      <button onClick={()=>{setbtnclick(btnclick+1)}}>CHANGE</button>
      <button id='save' onClick={save}>SAVE</button>
      </div>
      
      
    </div>

    <div className='quotecontainer'>
    {
      savedQuotes.length>0 && savedQuotes.map((value,index)=>(
        <div className="savequote" key={index}>
          <h1>{value.quote}</h1>
          <p>- {value.author}</p>
          <button id='delete' onClick={() => deleteQuote(index)}>Delete Quote</button>

        </div>
      ))
    }
    </div>
   


    </>
  )
}
