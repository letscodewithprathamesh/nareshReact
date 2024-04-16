import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {addCart, setProducts} from '../Redux/store.js'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function ProductList() 
{

  const dispatch=useDispatch();

  const products=useSelector((state)=>state.product.products)

  useEffect(()=>{
    fetch("https://dummyjson.com/products").
    then((res)=>res.json()).
    then((data)=>{console.log(data.products); dispatch(setProducts(data.products))} )
  },[dispatch])


  return (
    <div>
      <h1>Products</h1>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
      {products && products.map((pr,i)=>(

            <div class="p-4 md:w-1/3" key={i}>
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={pr.thumbnail} alt={pr.title} />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{pr.category}</h2>
                  <Link to={`/product/${pr.id}`}><h1 class="title-font text-lg font-medium text-gray-900 mb-3 hover:text-blue-700">{pr.title}</h1></Link>
                  <p class="leading-relaxed mb-3">{pr.description}</p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0"> 
                      <button onClick={()=>dispatch(addCart(pr))} >AddTo Cart</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        

      ))}

      </div>
        </div>
        </section> 

      

    </div>
  )
}
