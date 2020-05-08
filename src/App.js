import React, { Component, useState } from 'react'
import Todos from './Todos'

// Using class componenet..
export default class App extends Component {
  state = {
    item: '',
    todos: [
      { id: 1, content: 'study hooks' },
      { id: 2, content: 'implement todo app' },
    ],
  }
  add = () => {
    console.log(this.state.todos)
    this.setState({
      todos: this.state.todos.concat({
        id: this.state.todos.length + 1,
        content: this.state.item,
      }),
    })
  }
  todoitem = event => {
    this.setState({
      item: event.target.value,
    })
  }
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({ todos })
  }
  render() {
    return (
      <div
        className="todo-collection"
        style={{
          backgroundColor: '#E3F2FD',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <h1 className="cneter.blue-text" style={{ color: '#0D47A1' }}>
          Todo
        </h1>
        <div style={{ flexDirection: 'row' }}>
          <input type="text" onChange={this.todoitem} />{' '}
          <button onClick={this.add}>ADD</button>
        </div>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

// Uusing functional component and Hooks
const App = () => {
  const [todos, setTodo] = useState([
    { id: 1, content: 'study hooks' },
    { id: 2, content: 'implement todo app' },
  ])
  const [item, setItem] = useState([''])
  const addItem = event => {
    setItem(event.target.value)
  }
  const add = () => {
    setTodo([...todos, { id: todos.length + 1, content: item }])
  }
  const deleteTodo = id => {
    const Todos = todos.filter(todo => {
      return todo.id !== id
    })
    setTodo(Todos)
  }
  return (
    <div
      className="todo-collection"
      style={{
        backgroundColor: '#E3F2FD',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 className="cneter.blue-text" style={{ color: '#0D47A1' }}>
        Todo
      </h1>
      <div style={{ flexDirection: 'row' }}>
        <input type="text" onChange={addItem} />
        <button onClick={add}>ADD</button>
      </div>
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}
export default App
