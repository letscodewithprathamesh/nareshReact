const initialstate={
    todo:[]
}

const reducer=(state=initialstate,action)=>{

    switch(action.type)
    {
        case "ADD": return{...state,todo:[...state.todo,{
            text:action.data,
            id:action.id
        }]}

        case "DELETE": return{...state,todo:state.todo.filter((n)=>n.id !=action.id)}
        {/*case "DELETE": return{...state,todo:state.todo.filter((n)=>{console.log(n.id);})} */}

        default:return state
    }
}

export default reducer;


{/*
In JavaScript, when you use curly braces {} around the body of an arrow function, it denotes a block of statements, and you typically need to explicitly return a value if you want the function to return something. However, if you omit the curly braces, the arrow function implicitly returns the result of the expression inside it.
case "DELETE":
  return {
    ...state,
    todo: state.todo.filter((n) => n.id != action.id)
  }
In this case, the arrow function n => n.id != action.id is concise and does not use curly braces. It's a simple expression that evaluates to either true or false. The filter method will implicitly return true for elements where the condition is met (i.e., n.id != action.id), and those elements will be kept in the filtered array.

case "DELETE":
  return {
    ...state,
    todo: state.todo.filter((n) => {n.id != action.id})
  }
In this case, curly braces {} are used around n.id != action.id. This turns the arrow function into a block of statements. However, there's no explicit return statement inside the block. So, the function will implicitly return undefined. Since undefined is falsy, the filter method will filter out all elements from the array, resulting in an empty array.

Therefore, the first case correctly filters out elements from the todo array where the condition n.id != action.id is met, while the second case will likely filter out all elements unintentionally due to the absence of a proper return statement within the block.

*/}