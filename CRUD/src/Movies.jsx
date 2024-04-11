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

    const handleDelete = (id) => {
      axios
        .delete(`http://localhost:3000/movies/${id}`)
        .then((res) =>{
          let newMovies=movies.filter((m)=>m.id!==id);
          setMovies(newMovies)
        })
    }

  return (
    <div className='grid grid-cols-3 place-items-center'>
        {movies && movies.map((m,i)=>(
            <div className='Movie p-5 bg-white text-black rounded rounded-3 flex flex-col gap-3 ' key={i}>
                <img src={m.Poster} alt={m.Title} height="300" width="200" />
                <h1>{m.Title}</h1>
                <h2>YEAR : {m.Year}</h2>
                <button>✏️</button>
                <button onClick={()=>{handleDelete(m.id)}}>❌</button>
            </div>
        ))}
    </div>
  )
}
