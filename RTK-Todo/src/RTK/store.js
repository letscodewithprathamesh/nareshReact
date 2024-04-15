import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:'todos',
    initialState:[],
    reducers:{
            addTodo:(state,action)=>{
                console.log(state);
                console.log(action);
                state.push(action.payload)

            },
            deleteTodo:(state,action)=>{
                console.log(state);
                console.log(action);
                console.log(action.payload);
                return state.filter((n)=>n.id!=action.payload)

            },
    }
})

export const {addTodo,deleteTodo}=todoSlice.actions

const store=configureStore({
    reducer:{
        todos:todoSlice.reducer
    }
})

export default store;