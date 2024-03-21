import React from 'react'

function Child(pop)                                      
{
    
    console.log(pop);
  return (
    
    <div>
            <p>My Name is {pop.na} and My age is {pop.age}</p>
    
    </div>
  )
}


export default Child;

// argument passed into Child Component is props which is an Object
//props is not keyword its shortcut for properties
// we can pass any name as props(like pop)