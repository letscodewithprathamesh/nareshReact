import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Headers from './Headers.jsx'
import Home from './pages/Home.jsx'
import Project1 from './pages/Project1.jsx'
import Project2 from './pages/Project2.jsx'
import Notfound from './pages/Notfound.jsx'
import './App.css'


export default function App() 
{
  return (
    <div className='container'>
      <div className="router">

    <BrowserRouter >
    <Headers />
    <Routes>
      
      <Route path='/' element={<Home />}></Route>

      <Route path='/project1' element={<Project1 />}></Route>

      <Route path='/project2' element={<Project2 />}></Route>

      <Route path='*' element={<Notfound />}></Route>

    </Routes>
    </BrowserRouter>







      </div>

    </div>
  )
}
