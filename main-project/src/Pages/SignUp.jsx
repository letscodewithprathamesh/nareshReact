import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearError, setError, setLoading } from '../Redux/store';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
export default function SignUp() 
{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")

    const dispatch =useDispatch()
    const error=useSelector((state)=>state.product.error)

    async function handleSignUp()
    {
        dispatch(setLoading(true))
        dispatch(clearError())

        try
        {
            createUserWithEmailAndPassword(auth,email,password).
            then((val)=>{console.log("Signup successfull"+val);})

            dispatch(setLoading(false))
        }
        catch(error)
        {
            dispatch(setError(error))
        }
    }


  return (
    <div>

   <input type="text" name="" id="name"  placeholder="Enter the Name"className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' onChange={(e)=>{setName(e.target.value)}} />
   <br />

    <input type="email" name="" id="email" placeholder="Enter the Email" className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' onChange={(e)=>{setEmail(e.target.value)}} />
    <br />
    
    <input type="password" name="" id="password" placeholder="Enter the Password" className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' onChange={(e)=>{setPassword(e.target.value)}} />
    <br />

    <button onClick={handleSignUp}>SignUp</button>

    {error && <p>{error}</p>}

</div>
  )
}
