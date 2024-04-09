import React, { useState } from 'react'

export default function Count()
 {

    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(2);


    const handleCount=()=>{
        setCount(count+1); // it as Asynchronous function therefore this function is running parallel till that computation happens it run all the Synchronus code or remaining code
        console.log(count); // even the count is getting update in background by setCount function it will print 0


        setCount(count+1); // eventhough we have written two times it will trrigger only once to trigger twice we need to use previous data

        setCount2(count2+1)
        setCount2((pre)=>pre+1)


    }

  return (
    <div>
        <p>Count 1 : {count}</p>
        <p>Count 2 : {count2}</p>

        <button onClick={handleCount}>INCR</button>
    </div>
  )
}
