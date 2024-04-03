import React, { useRef } from 'react'
import './index.css'

export default function Login() 
{

    const userRef=useRef();
    const pwdRef=useRef();

    const submitdetails=(e)=>{
        e.preventDefault();
        console.log(userRef.current.value,pwdRef.current.value);
    }


  return (
    <div>
        <div className="loginContainer">
            <div className="login">
                <h1>LOGIN FORM</h1>
                <form action="" className="formdetail" onSubmit={submitdetails}>
                    <h2>USERNAME</h2>
                    <input type="text" ref={userRef} />
                    <h2>PASSWORD</h2>
                    <input type="text" ref={pwdRef} />

                    <button type='submit' id='log' >LOGIN</button>
                </form>
            </div>
        </div>
    </div>
  )
}
