/* eslint-disable react/prop-types */
import { TodoItem } from './TodoItem';

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No items"}
      {todos.map(todo => {
        return (
          <TodoItem
            id={todo.id}
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  );
}