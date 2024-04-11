import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from './Form.jsx';


export default function Movies() 
{

    const[movies,setMovies]=useState([])

    useEffect(()=>{
       {/* axios.get("http://localhost:3000/movies").
        then((res)=>{ console.log(res.data);});  */}

        axios.get("http://localhost:3000/movies").
        then((res)=>{ setMovies(res.data);});

    },[])

    const handlePost=(postData)=>{
      axios.post("http://localhost:3000/movies",postData).
      then((data)=>(setMovies([...movies,data.data]))) //new movies will added to setMovies and it will return
    }

    const handleDelete = (id) => {
      axios
        .delete(`http://localhost:3000/movies/${id}`)
        .then((res) =>{
          let newMovies=movies.filter((m)=>m.id!==id);
          setMovies(newMovies)
        })
    }

  const[formOpen,setFormopen]=useState(false);

  const openform=()=>{
    setFormopen(true)
  }

  const closeform=()=>{
    setFormopen(false)
  }


  return (
    
    <>
     <button className="flex items-center justify-center p-10 bg-neutral-50 text-black hover:bg-blue-700 hover:text-white h-10" onClick={openform}>
    ADD New
  </button>
      
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

      <Form  
      isOpen={formOpen} 
      onClose={closeform}
      handlePost={handlePost}
      length={movies.length}
      />
    </>
  )
}
