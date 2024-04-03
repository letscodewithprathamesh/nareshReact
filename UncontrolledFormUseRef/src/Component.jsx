import React, { useRef, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleClick = () => {
    setCount(count + 1);
    countRef.current = countRef.current + 1;
    console.log('Count:', count); // This will log the previous value of count
    console.log('Ref Count:', countRef.current); // This will log the updated value of countRef.current
 
 
    /* The reason you see count as 0 in the <p> tag while countRef.current is updating correctly in the console is due to the asynchronous nature of the setCount function in React's state updates.

When you call setCount(count + 1), React doesn't immediately update the count variable. Instead, it schedules an update to the state. This means that the count variable doesn't immediately reflect the updated value after calling setCount.

However, when you access countRef.current, you are directly accessing the current value of the ref, which is updated synchronously. So, countRef.current will always reflect the latest value assigned to it.

To see the updated value of count in the <p> tag, you should use count directly, but remember it will be updated on the next render cycle, not immediately after calling setCount. Here's how you can modify your code to see the updated value in the <p> tag:
*/
  };

  return (
    <div>
      <p>Count: {count}</p>
   
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
}

export default MyComponent;
