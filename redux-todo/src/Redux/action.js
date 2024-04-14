export const ADDTODO=(id,text)=>({
    type:"ADD",
    id:id,
    data:text
})

export const DELETETODO=(id)=>({
    type:"DELETE",
    id:id,
})

export const TOGGLE=(id)=>({
    type:"TOOGLE",
    id:id,
})