function Todo(props)
{
    
    return(
        <div>
            <p>Im Child</p>
            <input type="text" onChange={(e)=>{props.update(e.target.value)}}/>
            {/*
            onChange event triggers, calling props.update(e.target.value) which calls the update function in the parent component (Todos),
             passing the new value as an argument.
            In the Todos component, setDummyText(text) updates the state dummytext with the new value.

            e.target.value=>is not set to dummytext value but due onChange event whatever we are passing argument is updating the state using SetDummy so it is directly updating that value we are not importing dummytext value. the dummytext already set to dummy we are updating directly using setDummy 
            */}
          
            <li key={props.index}>{props.task}  <button onClick={()=>{props.remove(i)}}>❌ </button>  </li>
            
        </div>
    )

}


export default Todo