import React from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'
import Contact from './Pages/Contact'

export default function App() {
  return (
    <div>
      <div>

       <Header />

       <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/Projects' Component={Project}/>
        <Route path='/contact' Component={Contact}/>
      </Routes>
      
       <Footer />


      </div>
    </div>
  )
}
