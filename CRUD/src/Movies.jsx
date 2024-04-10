import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function Movies() 
{

    const[movies,setMovies]=useState([])

    useEffect(()=>{
       {/* axios.get("http://localhost:3000/movies").
        then((res)=>{ console.log(res.data);});  */}

        axios.get("http://localhost:3000/movies").
        then((res)=>{ setMovies(res.data);});

    },[])



  return (
    <div>
        {movies && movies.map((m,i)=>(
            <div className="movie" key={i}>
                <img src={m.Poster} alt={m.Title} height="300" width="200" />
                <h1>{m.Title}</h1>
                <h2>YEAR : {m.Year}</h2>
            </div>
        ))}
    </div>
  )
}
