import React, { useState ,useEffect} from 'react'

export default function Form({isOpen,onClose,handlePost,movie})
 {
    const [formData,setFormData]=useState({
        id:"",
        Title:"",
        Poster:"",
        Year:"",
    })

    useEffect(()=>{
        if(movie)
        {
            setFormData({
                id:movie.id,
                Title:movie.Title,
                Poster:movie.Poster,
                Year:movie.Year

            })
        }
    },[movie])

    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData((pre)=>({...pre,[name]:value}))
    }

  

    const handleSubmit=(e)=>{
        e.preventDefault()

        console.log(formData);
        handlePost(formData)
        onClose()
    }

    if(!isOpen)
    {
        return null;
    }


  return (
    <div>
        <div className="absolute top-1/3 left-1/3 w-2/4  p-3 z-50 bg-yellow-500 border border-black text-black ">
             <button onClick={onClose} className='float-end'>❌</button>
             <h1 className='text-black text-lg'>Movie Details</h1>
            <form action="" className='relative form p-2 ' onSubmit={handleSubmit}>
                <input type="number" name="id" value={formData.id} onChange={handleChange} className='form-control-plaintext my-5 h-5 w-full ' placeholder='Enter movie Number' />
                <input type="text" name="Title" value={formData.Title} onChange={handleChange} className='form-control-plaintext h-10 w-full  focus:border-green-600 my-5' placeholder='Enter the movie name'/><br />
                <input type="url" name="Poster" value={formData.Poster} onChange={handleChange} className='form-control-plaintext my-5 h-10 w-full ' placeholder='Enter the movie url'/><br />
                <input type="number" name="Year" value={formData.Year} onChange={handleChange}className='form-control-plaintext my-5 h-10 w-full' placeholder='Enter the released year' /><br />
                <button className='p-5 bg-black rounded-lg text-white hover:bg-white hover:text-black ' >SUBMIT</button>
            </form>
        </div>
    </div>
  )
}
