import React from 'react'

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id)
            }}
          >
            {todo.content}
          </span>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todo's left</p>
  )
  return (
    <div
      className="todos "
      style={{
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        fontFamily: 'source-code-pro',
      }}
    >
      {todoList}
    </div>
  )
}
export default Todos
