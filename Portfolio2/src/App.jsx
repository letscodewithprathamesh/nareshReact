import React from 'react'
import './App.css'
import Header from './Components/Navbar/Header'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Project from './Pages/Project/Project'
import Contact from './Pages/Contact/Contact'
import Skills from './Pages/Skills/Skills'

export default function App() {
  return (
    <div>
      <div>

       <Header />
       <Home />
       <About />
       <Skills />
       <Project />
       <Contact />

       <Footer />


      </div>
    </div>
  )
}
