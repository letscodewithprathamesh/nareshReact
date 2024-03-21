import Child from "./Child";

function App()
{
  
  let name="Prasad",name1="nana",name2="Aishwarya"; // for writing JavaScript code write outside the written statement
  let age=[24,25,26];
  let [a1,a2,a3]=age; // array Destruction
  return(
    //Its is JSX code(Html code)
    
    <div>
      <h1>Ex1</h1>
       <Child na={name}  age={a1}/>
       <Child na={name1}  age={a2}/>
       <Child na={name2}  age={a3}/>
    </div>
  )
}

export default App;