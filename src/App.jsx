import { useEffect, useState } from "react"
import "./styles.css"
import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"

export default function App() {
const [todos, setTodos] = useState(() => {
  const savedTodos = localStorage.getItem("savedTodos")
  if (savedTodos) {
    return JSON.parse(savedTodos)
  } else {
    return []
  }
})

useEffect(() => {
  localStorage.setItem("savedTodos", JSON.stringify(todos))
}, [todos])

function addTodo (title) {
  setTodos(currentTodos => {
    return [
      ...currentTodos,
      {id: crypto.randomUUID(), title, completed: false},
    ]
  })
}

function toggleTodo (id, completed) {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed}
      }
      return todo
    })
  })
}

function deleteTodo (id) {
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })
}

  return (
    <>
    <TodoForm onSubmit={addTodo}/>
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}