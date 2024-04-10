import React, { memo } from 'react'

function Callback1({counterTwo,result}) 
{
console.log("Child component rendered  -- ");

  return (
    <div>
     <h1>CHILD COMPONENT</h1>
     <button onClick={result}>Console</button>
    </div>
  )
}
export default memo(Callback1)
