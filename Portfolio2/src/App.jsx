import React from 'react'
import './App.css'
import Header from './Components/Navbar/Header'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import Skills from './Pages/Skills'

export default function App() {
  return (
    <div>
      <div>

       <Header />
       <Home />
       <About />
       <Project />
       <Contact />
       <Footer />


      </div>
    </div>
  )
}
