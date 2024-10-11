// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleComplete, onDelete }) => {
    return (
        <div>
            <h2>Lista de Tareas</h2>
            <ul>
                {todos.map(todo => (
                    // Recorre la lista de tareas para renderizar cada una con el componente TodoItem.
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggleComplete={onToggleComplete}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;