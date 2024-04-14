export const increment=()=>({
    type:"INCR"
})

export const decrement=()=>({
    type:"DECR"
})




/* 
increament and decrement are action creators which is plain object

whenever action creator are dispatach from the component
it will come to action creator and taking value for the reducer function 
it is used for triggering reducer function


export const increment=()=>({
    type:"INCR"  Here, type is a property of the action object, and "DECR" is the value assigned to it. This action creator decrement creates an action object with the type "DECR". This means that when this action is dispatched, reducers in your Redux store can listen for actions of type "DECR" and respond accordingly.
})

export const decrement=()=>({
    type:"DECR"
})

*/