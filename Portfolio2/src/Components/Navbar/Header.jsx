import React from 'react';
import './header.css'; // Import the CSS file for header styles
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png'
import { Link } from 'react-scroll'


export default function Header() {
  return (
    <nav className='navbar'>
      <img src={logo} alt="Logo" className='logo'/>
      <div className='desktopMenu'> 
        <Link  activeClass='active' to='home' spy={true}  smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'>HOME</Link>
        <Link activeClass='active' to='about' spy={true}  smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>ABOUT</Link>
        <Link activeClass='active' to='skills' spy={true}  smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>SKILL</Link>
        <Link activeClass='active' to='project' spy={true}  smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>PROJECTS</Link>
       
      </div>
      <button onClick={()=>{document.getElementById('contact').scrollIntoView({behavior:'smooth'})}} className='desktopMenuBtn'>
        <img src={contact} alt="" className='desktopMenuImg'/>Contact Me
      </button>
    </nav>
  );
}


{/*import React from 'react'
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

        <li><a href='#about'  className='text-decoration-none text-white'>ABOUT</a></li>


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
 */}