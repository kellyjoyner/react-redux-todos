import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from '../actions/actionTypes'

let nextTodoId = 0

export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

// let nextTodoId = 0
//
// export const addTodo = (text) => ({
//   type: ADD_TODO,
//   id: nextTodoId++,
//   text
// })
//
// export const setVisibilityFilter = (filter) => ({
//   type: SET_VISIBILITY_FILTER,
//   filter
// })
//
// export const toggleTodo = (id) => ({
//   type: TOGGLE_TODO,
//   id
// })