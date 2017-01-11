import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './App'


// Store has the following responsibilities
// 1. Holds application state
// 2. Allows access to state via getState()
// 3. Allows state to be updated via dispatch(action)
// 4. Registers listeners via subscribe(listener)
// 5. Handles unregistering of listeners via the function returned by subscribe(listener)

// Will only have ONE store in a redux application
// When you want to split data handling logic, use reducer composition instead of many stores

// Pass combined reducer function 'todoApp' to the store
// Optional: Can set the initial state as the second argument to createStore()
// ^ Useful for hydrating the state of the client to match the state of a Redux app running on the server
let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)