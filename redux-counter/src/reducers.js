import { combineReducers } from "redux";

const initialState={
    count:0,
    count2:200,
}

const reducer1=(state=initialState,action)=>{

    switch(action.type)
    {
        case 'INCR':return{...state,count:state.count+1}
        case 'DECR':return{...state,count:state.count-1}
        default: return state;
        

    }
}


const reducer2=(state=initialState,action)=>{

    switch(action.type)
    {
        case 'ADD':return{...state,count2:state.count2+action.amount}
        case 'SUB':return{...state,count2:state.count2-action.amount}
        default: return state;
        

    }
}

const reducer=combineReducers({
    c1:reducer1,
    c2:reducer2
})


export default reducer


{/*
Explanation of code

const initialState={
    count:0,
    count2:200,
}

the initialState is an argument for creating an State Object , inside we will write all the which we want to use in our react application

const reducer1=(state=initialState,action)=>{

    switch(action.type)
    {
        case 'INCR':return{...state,count:state.count+1}
        case 'DECR':return{...state,count:state.count-1}
        default: return state;
        

    }
}
export default reducer1

the reducer1 is function which is pure function means it will update the value based on argument but it will delete the previous value and create a new value(Object) and store the updated value which give prediction
this function will take two argument which is state and action and here const reducer1=(state=initialState,action) we had just assign our state object to argument state 
inside the function we had given switch case but we can take anything like if,if-else,while to check condition ,Inside condition we hade provide action creator value ,here we can pass any id if we have in a action to trigger specific condition
case 'INCR':return{...state,count:state.count+1} here the ...state means the spread operator for object means {count2:200,count:0+1} updating to {{count2:200,count:1}} we are using more than two state inside state object if we dont write {...state,count=state.count+1} and instead we write {count=state.count+1} then it will destroy all the remaining state only this state will be there because we are destroying the object and creating new
state.count we accessing value inside the state object

this function will be triggered by action with some event(onclick,onchange) and will update the state ,the state which is updated will be store inside the store.js which is a global state ,to access the store we will export this function and used inside the store.js

*/}