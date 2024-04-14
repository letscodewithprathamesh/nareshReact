import React from 'react'
import Counter from './Counter'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        
      <h1>Redux counter</h1>
      <Counter />
      </Provider>
    </div>
  )
}


{/*



define - In <Provider store={store}>, store is a prop passed to the Provider component. The store prop should be assigned the Redux store instance that you've created using createStore() from Redux.
By wrapping your application with <Provider store={store}>, any components within your application can access the Redux store without needing to pass it down manually through props. This simplifies the process of connecting Redux to your React application.

this is provider from react-redux library which will accept the store value as prop and can be utilized inside the Application
this is where actually redux code gets connected to react application

<Provider store={store}>
        
      <h1>Redux counter</h1>
      <Counter />
      </Provider>
    
    
*/}