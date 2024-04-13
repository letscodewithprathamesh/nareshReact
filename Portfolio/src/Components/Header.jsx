import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div className='Header bg-black text-white w-100  '>
        <ul className='d-flex justify-content-center align-items-center gap-5 list-unstyled w-100 h-100 '>
        <li>
            <Link 
            to='/'
            className='text-decoration-none text-white'
            >HOME</Link>
        </li>
        <li>
            <Link to='/about'  className='text-decoration-none text-white'>ABOUT</Link>
        </li>
        <li>
            <Link to='/Projects'  className='text-decoration-none text-white'>PROJECTS</Link>
        </li>
        <li>
            <Link to='/contact'  className='text-decoration-none text-white'>CONTACT</Link>
        </li>
        </ul>
       
        
    </div>
  )
}
