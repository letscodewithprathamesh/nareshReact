import React, { useState } from 'react'
import './App.css'
export default function App() 
{

  const [formDetails,setFormDetails]=useState({
    username:"",
    email:"",
    password:""
  })
  //we are creating a state name as formdetails which is an object which has 3 properties such username,email and password all with and empty string which we are going to update.

  
  const [formError,setFormError]=useState({
    password:""  })


const change=(e)=>{
  const {name,value}=e.target //e.target is object we destructing name and value and using it .this will target name and value using e.target.name and e.target.value "onChange event"
  console.log(name,value)
  setFormDetails({...formDetails,[name]:value}) //we set name and value as key-value pair into formdetails object
  //username : nana (key-value pair)
}

const submit=(e)=>{
 e.preventDefault() /*The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
 //Clicking on a "Submit" button, prevent it from submitting a form.
//Clicking on a link, prevent the link from following the URL.
e.preventDefault() with a submit button is a common pattern used to prevent the default form submission behavior, which typically involves a page refresh.Instead we are displaying on console

*/
 console.log(e.target.value);


if(formDetails.password.length<=5)//there is problem in space
{
  setFormError({...formError,password:"Please enter password of Minimum 6 Character"}) 
  /*formError initially password="", 
  {...formError}: This part of the expression creates a new object by spreading the properties of the formError object. It effectively copies all key-value pairs from the formError object into a new object.
password: "Please enter password of Minimum 6 Character": This part of the expression updates the password property of the new object with the specified error message. If the password property already exists in the formError object, it will be overwritten with the new value. If it doesn't exist, it will be added to the new object.


  setFormError is a function used to update the state in a React component. It takes the new object (created using the spread operator) and updates the formError state with it. */
}

console.log(formDetails);

}



  return (
    <div className='Container'>
      <div className="forms">
        <h1>CONTACT FORMS</h1>
        <form action="" className="contactform" onSubmit={submit}>
          <input 
          type="text" 
          id='un'
          name="username" //Input tag attribute name should be same as state Objects property name
           placeholder='Enter the Name'
           onChange={change}
           />

          <input
           type="email" 
          name="email"
          id='em'  
          placeholder='Enter the Email'
          onChange={change}
          />

          <input 
          type="password" 
          name="password"
          id='pwd' 
          placeholder='Enter the Password'
          onChange={change}
           />

           {formError.password && (<p className='errors'>{formError.password}</p>)}

          <input type="submit" id='sub' value='SUBMIT' />
        </form>
      </div>

    </div>
  )
}
