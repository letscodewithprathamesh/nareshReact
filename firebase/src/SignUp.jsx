import React, { useState } from 'react'
import { auth } from './firebase';

export default function SignUp() 
{

    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("")

    const handleSingup= async()=>{

        try
        {
            await auth.createUserWithEmailAndPassword(email,password)
        }
        catch(err)
        {
            console.log(err);
        }

    }


  return (
    <div>
        <div>
            <input type="email" name="" id=""  value={email} placeholder='Enter the Email' onChange={(e)=>{setEmail(e.target.value)}}/> <br /><br />
            <input type="password" name="" id="" value={password}  placeholder='Enter the Password ' onChange={(e)=>{setpassword(e.target.value)}}/>


            <button onClick={handleSingup}>Submit</button>
        </div>

    </div>
  )
}
