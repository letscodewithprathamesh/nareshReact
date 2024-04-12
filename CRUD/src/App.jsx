import React from 'react'
import Movies from './Movies.jsx'
import { MovieProvider } from './MovieContext.jsx'


export default function App() 
{

  return (
    <MovieProvider>

      <div className=' bg-black text-white  p-10 '>
      <Movies />  
    </div>

    </MovieProvider>
  
  )
}
