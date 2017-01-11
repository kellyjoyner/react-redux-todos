import React from 'react'

import ListOptions from './components/ListOptions'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

import './App.css'

const App = () => (
  <div className="appShell">
    <div className="innerApp">
      To Do List:
      <br /><br />
      <AddTodo />
      <VisibleTodoList />
      <ListOptions />
    </div>
  </div>
)

export default App