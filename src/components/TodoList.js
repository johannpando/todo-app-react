// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
    return (
        <div>
            <h2>Lista de Tareas</h2>
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;