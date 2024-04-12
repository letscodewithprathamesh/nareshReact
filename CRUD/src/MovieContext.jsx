import React, { useState,useEffect,createContext } from 'react'
import axios from 'axios';

const MovieContext=createContext();

export const MovieProvider=({children})=>{

    const[movies,setMovies]=useState([])
    const[formOpen,setFormopen]=useState(false);

    useEffect(()=>{
        {/* axios.get("http://localhost:3000/movies").
         then((res)=>{ console.log(res.data);});  */}
 
         axios.get("http://localhost:3000/movies").
         then((res)=>{ setMovies(res.data);}).
         catch((error)=>{console.error("ERROR fetching movies ",error)})
 
     },[])

     const handlePost=(postData)=>{

        const existingMovie=movies.find((m)=>m.id === postData.id)
        if(existingMovie)
        {
            console.log(postData,existingMovie);
            axios.put(`http://localhost:3000/movies/${postData.id}`,postData).
            then(()=>{
                const updatedMovies=movies.map((m)=>{
                    m.id===postData.id ? postData : m
                })
                setMovies(updatedMovies) // movies will be update to setMovies and it will return
            }).
            catch((error)=>{console.error("ERROR updating movies ",error)})
        }
        else
        {
            axios.post("http://localhost:3000/movies",postData).
            then((res)=>{
                        setMovies([...movies,res.data]) //new movies will be add to setMovies and it will return
                }).
            catch((error)=>{console.error("ERROR adding movies ",error)})

        }

      }

      const handleDelete = (id) => {
        axios
          .delete(`http://localhost:3000/movies/${id}`)
          .then(() =>{
            let newMovies=movies.filter((m)=>m.id!==id);
            setMovies(newMovies)
          }).
          catch((error)=>{console.error("ERROR deleting movies ",error)})
      }
  
      const openform=()=>{
        setFormopen(true)
      }
    
      const closeform=()=>{
        setFormopen(false)
      }

      return(
        <MovieContext.Provider
            value={
             {
                movies,
                formOpen,
                openform,
                closeform,
                handleDelete,
                handlePost
                }
         }   
        >
            {children}

        </MovieContext.Provider>
      )

}

export default MovieContext