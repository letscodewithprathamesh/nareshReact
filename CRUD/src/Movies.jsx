import React, { useContext, useState } from 'react'
import MovieContext from './MovieContext.jsx';
import Form from './Form.jsx';

export default function Movies() 
{
  const {movies,formOpen,handleDelete,openform,closeform,handlePost}=useContext(MovieContext)

  const[selectedMovie,setselectedMovie]=useState(null)

  const editMovie=(movie)=>{
    setselectedMovie(movie)
    openform()
  }

  return (
    
    <>
     <button className="flex items-center justify-center p-10 bg-neutral-50 text-black hover:bg-blue-700 hover:text-white h-10" 
     onClick={()=>{
      setselectedMovie(null)
      openform()
     }}>
    ADD New
  </button>
      
      <div className='grid grid-cols-3 place-items-center'>
        {movies && movies.map((m)=>(
            <div className='Movie p-5 bg-white text-black rounded rounded-3 flex flex-col gap-3 ' key={m.id}>

                <img
                 src={m.Poster} 
                 alt={m.Title}
                  height="300" 
                  width="200" />

                <h1>{m.Title}</h1>

                <h2>YEAR : {m.Year}</h2>

                <button onClick={()=>{editMovie(m)}}>✏️</button>
                <button onClick={()=>{handleDelete(m.id)}}>❌</button>
            </div>
        ))}
      </div>

      <Form  
      isOpen={formOpen} 
      onClose={closeform}
      handlePost={handlePost}
      movie={selectedMovie}
      />
    </>
  )
}
