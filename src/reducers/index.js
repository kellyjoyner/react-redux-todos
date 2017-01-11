// Actions describe the fact that something happened, they do not specify how the app's state changes in response
// Reducers specify ow the app's state changes in response to actions
// (previousState, action) => newState

// Very important that the reducer stays pure
// Never do the below in a reducer:
// 1. Mutate its arguments
// 2. Perform side effects, like API calls and routing transitions
// 3. Call non-pure functions (ex. Date.now() or Math.random())

// Pure = Given the same arguments, it should calculate the next state and return it.
// No surprises. No side effects. No API calls. No mutations. Just a calculation.

// import { combineReducers } from 'redux'
//
// import visibilityFilter from './visibilityFilter'
// import todos from './todos'
//
// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// })
//
// export default todoApp

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp