import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Modal from "./Modal";

uuidv4();

const getInitialTodos = () => {
  const savedItems = JSON.parse(localStorage.getItem("items"));
  return savedItems || [];
};

const TodoWrapper = () => {
  const [todos, setTodos] = useState(getInitialTodos);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  const openEditModal = (todo) => {
    setCurrentTodo(todo);
    setIsModalOpen(true);
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task} : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map(
        (todo, index) => (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
 
            openEditModal={() => openEditModal(todo)}
          />
        )
        // )
      )}
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          currentTodo={currentTodo}
          editTask={editTask}
        />
      )}
    </div>
  );
};

export default TodoWrapper;
