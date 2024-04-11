import React from 'react'

export default function Form({isOpen,isClose})
 {

    if(!isOpen)
    {
        return null;
    }


  return (
    <div>
        <h1>Movie Details</h1>
        <div className="absolute top-2/4 left-2/4  p-10 z-50 bg-yellow-500 ">
            <form action="" className='relative form p-5 '>
                <input type="text" className='form-control-plaintext h-10 w-28  focus:border-green-600' placeholder='Enter the movie name'/><br />
                <input type="url" className='form-control-plaintext' placeholder='Enter the movie url'/><br />
                <input type="number" className='form-control-plaintext' placeholder='Enter the released year' /><br />
            </form>
        </div>
    </div>
  )
}
