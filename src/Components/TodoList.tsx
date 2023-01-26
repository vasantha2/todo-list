import React from "react";
import Modal from "./Model";
import { TodoForm } from "./TodoFrom";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  editTodo: EditTodo;
  addTodo: AddTodo;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  onRemoveTodo,
  editTodo,
  addTodo,
}) => {
  const [modelOpen, setModelOpen] = React.useState(false);
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.text}
            todo={todo}
            toggleComplete={toggleComplete}
            onRemoveTodo={onRemoveTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
      <button onClick={() => setModelOpen((e) => !e)} className="addbutton">
        AddTodo
      </button>
      <Modal isOpen={modelOpen} toggle={() => setModelOpen((e) => !e)}>
        <TodoForm
          addTodo={(e) => {
            setModelOpen(false);
            addTodo(e);
          }}
        ></TodoForm>
      </Modal>
    </>
  );
};
