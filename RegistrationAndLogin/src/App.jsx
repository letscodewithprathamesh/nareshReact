import React, { useState } from 'react'
import './App.css'
import Login from './Login.jsx';


export default function App() 
{

  const [formDetails,setFormDetails]=useState({
    flname:"",
    phone:"",
    address:"",
    email:"",
    username:"",
    password:""

  })

  const [formSubmitted, setFormSubmitted] = useState(false);

  const changedetail=(e)=>{

    const {name,value}=e.target;
    console.log(name,":",value)
    setFormDetails({...formDetails,[name]:value})

  }

  const submitform=(e)=>{
    e.preventDefault();
    console.log(formDetails);
    setFormSubmitted(true); // Update state when the form is submitted
   
  }


  return (
    <div>
      <div className='Container'>
        <div className="forms">
          <h1>REGISTRATION FORM</h1>
          <form className="contactform" onSubmit={submitform}>

            <div className="namedetail">
            <h2>FULL NAME</h2>
            <input type="text" name='flname' onChange={changedetail} />
            <h2>PHONE NO</h2>
            <input type="tel" name='phone' onChange={changedetail} />
            </div>

            <div className="addressdetail">
            <h2>ADDRESS</h2>
            <input type="text" name='address' onChange={changedetail} id='add'/>
            <h2>EMAIL ID</h2>
            <input type="email" name='email' onChange={changedetail} />
            </div>
           
           <div className="creditentialdetail">
           <h2>USERNAME</h2>
            <input type="text" name='username' onChange={changedetail}/>
            <h2>PASSWORD</h2>
            <input type="password" name='password' onChange={changedetail}/>
           </div>
        

            <button type='submit' id='sub'>REGISTER</button>
          </form>
        </div>
      </div>

      {formSubmitted && <Login />}
    </div>
  )
}
