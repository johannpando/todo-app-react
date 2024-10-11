// src/App.js
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import api from './services/api';

function App() {
    const [todos, setTodos] = useState([]);

    // Cargar las tareas cuando el componente se monta
    useEffect(() => {
        api.get('')
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => {
                console.error('Error fetching todos:', error);
            });
    }, []);

    // Función para añadir una nueva tarea
    const handleTodoAdded = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <div className="App">
            <h1>Aplicación TODO</h1>
            <TodoForm onTodoAdded={handleTodoAdded} />
            <TodoList todos={todos} />
        </div>
    );
}

export default App;