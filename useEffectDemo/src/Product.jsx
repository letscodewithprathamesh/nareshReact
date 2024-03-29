import React, { useEffect, useState } from 'react'
import Products from './Products.jsx';
import './App.css'

export default function Product() 
{
    const [product,Setproduct]=useState([])

    useEffect(()=>{

        async function fetchdata()
        {
        const x=await fetch('https://fakestoreapi.com/products');
        const data=await x.json()
        Setproduct(data)
        }

        fetchdata()
        

    },[])





  return (
    <div>
        {
            product.map((value,index)=>(
            
                <Products title={value.title} image={value.image} id={value.id} index={index} />
                
            ))
        }

    </div>
  )
}
