import React, { useState } from 'react'

export default function Form({isOpen,onClose,handlePost,length})
 {
    const [id,setid]=useState(length)

    if(!isOpen)
    {
        return null;
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const newData={
            "id": Math.floor(Math.random()*10000),
            "Title":e.target[0].value,
            "Poster":e.target[1].value,
            "Year":e.target[2].value
        }
        setid(id+1);
        console.log(newData);

        handlePost(newData)
        onClose()

    }


  return (
    <div>
        <div className="absolute top-1/3 left-1/3 w-2/4  p-3 z-50 bg-yellow-500 border border-black text-black ">
             <button onClick={onClose} className='float-end'>❌</button>
             <h1 className='text-black text-lg'>Movie Details</h1>
            <form action="" className='relative form p-2 ' onSubmit={handleSubmit}>
                <input type="text" className='form-control-plaintext h-10 w-full  focus:border-green-600 my-5' placeholder='Enter the movie name'/><br />
                <input type="url" className='form-control-plaintext my-5 h-10 w-full ' placeholder='Enter the movie url'/><br />
                <input type="number" className='form-control-plaintext my-5 h-10 w-full' placeholder='Enter the released year' /><br />
                <button className='p-5 bg-black rounded-lg text-white hover:bg-white hover:text-black ' >SUBMIT</button>
            </form>
        </div>
    </div>
  )
}
