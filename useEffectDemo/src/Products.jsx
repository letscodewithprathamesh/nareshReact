import React from 'react'
import './App.css'
export default function Products(props) 
{

    const{title,image,id,index}=props

  return (
    <div className='productcontainer'>
        <div className='image'>
                <img src={image} key={index}/>
            <div className='title'>
                <h1>{id} {title}</h1>
            </div>

        </div>
    </div>
  )
}
