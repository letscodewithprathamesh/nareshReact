import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() 
{

  const cart=useSelector((state)=>state.product.cart)

  return (
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">E-COMMERCE</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link  class="mr-5 hover:text-gray-900"to='/'>HOME</Link>
      <Link  class="mr-5 hover:text-gray-900"to='/about'>ABOUT</Link>
      <Link  class="mr-5 hover:text-gray-900"to='/Products'>PRODUCT</Link>
      <Link  class="mr-5 hover:text-gray-900"to='/contact'>CONTACT</Link>
      
    </nav>
    <Link to='/cart'>
    <button class='inline-flex items-center bg-gray-100 border-0 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0'>
      Cart 
      <span className='rounded-lg p-6'>{cart.length}</span>
    </button>
    
    </Link>
   
   <Link to='/login'>
   <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" >Login
    </button>
   </Link>
    
    </div>
  
</header>
  )
}
