// src/components/TodoList.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    // Cargar las tareas cuando el componente se monta
    useEffect(() => {
        api.get('')
            .then(response => {
                setTodos(response.data); // Asegúrate de que la respuesta sea un array
            })
            .catch(error => {
                console.error('Error fetching todos:', error);
            });
    }, []);

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