// src/App.js
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import api from './services/api';

function App() {
    const [todos, setTodos] = useState([]);
    const [warning, setWarning] = useState('');

    // Cargar las tareas cuando el componente se monta
    useEffect(() => {
        api.get('')
            .then(response => {
                setTodos(response.data);
                setWarning(''); // Limpiar cualquier advertencia anterior
            })
            .catch(error => {
                console.error('Error al listar las tareas:', error);
                setWarning('No se pudieron cargar las tareas. Por favor, verifica la conexión con el servidor.');
            });
    }, []);

    const handleTodoAdded = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const handleToggleComplete = (id, completed) => {
        api.put(`/${id}`, { completed })
            .then(response => {
                setTodos(todos.map(todo =>
                    todo.id === id ? { ...todo, completed: response.data.completed } : todo
                ));
            })
            .catch(error => {
                console.error('Error al actualizar la tarea:', error);
                setWarning('No se pudo actualizar la tarea. Por favor, verifica la conexión con el servidor.');
            });
    };

    const handleDeleteTodo = (id) => {
        api.delete(`/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id));
            })
            .catch(error => {
                console.error('Error al eliminar la tarea:', error);
                setWarning('No se pudo eliminar la tarea. Por favor, verifica la conexión con el servidor.');
            });
    };

    return (
        <div className="App">
            <h1>Aplicación TODO</h1>
            {warning && <p style={{ color: 'red' }}>{warning}</p>}
            <TodoForm onTodoAdded={handleTodoAdded} />
            <TodoList todos={todos} onToggleComplete={handleToggleComplete} onDelete={handleDeleteTodo} />
        </div>
    );
}

export default App;