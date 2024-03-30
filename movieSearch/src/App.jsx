import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Movies from './Movies.jsx';
import './App.css'

export default function App()
 {


  const[searchTerm,setSearchterm]=useState('')
  const[movieList,setMovieList]=useState([]);

 useEffect(()=>{
  async function fetchdata()
  {
    const res=await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=e3277b8e`);  // ${searchTerm} this is template which we had add to s which search movie ,movie name and api key in the whole API, using  ${searchTerm} template we are assigning searchTerm state to which will directly takes the value
    const data=await res.json();
    console.log(data)
    setMovieList(data.Search) //data all the api data had come as object under Search all the data is in the array
    console.log(data.Search);

   
  }

  fetchdata();
 },[searchTerm])  //only for dependency serachTerm state the component will render


  return (
    <div className='main'>
      <h1 id='title'>MOVIE SEARCH</h1>
      <div className='search'>
      <input type='text' value={searchTerm} onChange={(event)=>{setSearchterm(event.target.value)}} />
      <button id='clear' onClick={()=>{setSearchterm('')}} >CLEAR</button>
      </div>
      
      <Movies movieList={movieList}/> {/* pass prop of whole api data in the form array */}
    </div>
  )
}
