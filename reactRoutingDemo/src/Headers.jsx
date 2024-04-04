import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function Headers() 
{
  return (
    <div className='headers'>
         <header>
        <nav className='navigation'>
            <button>
                <Link to={'/'}>HOME</Link>
            </button>

            <button>
                <Link to={'/project1'}>PROJECT 1</Link>
            </button>
            
            <button>
                <Link to={'/project2'}>PROJECT 2</Link>
            </button>
        </nav>
    </header>
    </div>
   
  )
}
