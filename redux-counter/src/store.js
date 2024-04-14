import reducer from "./reducers";
import { createStore } from "redux";

const store=createStore(reducer);

export default store

{/*
import reducer1 from "./reducers"; // we are importing the reducer1 function from reducers.js page
import { createStore } from "redux"; //now this is old technique for creation of store 



const store=createStore(reducer1); //we are creating store and accessing the store we are passing the reducer1 function to it,so whenever the state updates it will stored here and can be used globally

//store is an argument which consist of global state which will we give the react-application by exporting 

export default store
*/}