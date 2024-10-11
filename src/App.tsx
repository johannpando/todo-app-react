// src/App.tsx
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import api from './services/api';
import { Todo } from './types/Todo';
import { title } from 'process';


const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [warning, setWarning] = useState<string>('');

    useEffect(() => {
        api.get<Todo[]>('')
            .then(response => {
                setTodos(response.data);
                setWarning('');
            })
            .catch(error => {
                console.error('Error al listar las tareas:', error);
                setWarning('No se pudieron cargar las tareas. Por favor, verifica la conexión con el servidor.');
            });
    }, []);

    const handleTodoAdded = (newTodo: Todo) => {
        setTodos([...todos, newTodo]);
    };

    /*const handleToggleComplete = (id: number, completed: boolean) => {
        api.put<Todo>(`/${id}`, { completed, title })
            .then(response => {
                setTodos(todos.map(todo =>
                    todo.id === id ? { ...todo, completed: response.data.completed } : todo
                ));
            })
            .catch(error => {
                console.error('Error al actualizar la tarea:', error);
                setWarning('No se pudo actualizar la tarea. Por favor, verifica la conexión con el servidor.');
            });
    };*/

    const handleToggleComplete = (id: number, completed: boolean) => {
        // Encuentra la tarea a actualizar para obtener el título
        const todoToUpdate = todos.find(todo => todo.id === id);
        if (!todoToUpdate) {
            setWarning('Tarea no encontrada.');
            return;
        }
    
        // Envía la solicitud de actualización con el título y el estado completado
        api.put<Todo>(`/${id}`, { title: todoToUpdate.title, completed })
            .then(response => {
                // Actualiza el estado con la tarea modificada
                setTodos(todos.map(todo =>
                    todo.id === id ? response.data : todo
                ));
            })
            .catch(error => {
                console.error('Error al actualizar la tarea:', error);
                setWarning('No se pudo actualizar la tarea. Por favor, verifica la conexión con el servidor.');
            });
    };

    const handleDeleteTodo = (id: number) => {
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
            <TodoList
                todos={todos}
                onToggleComplete={handleToggleComplete}
                onDelete={handleDeleteTodo}
            />
        </div>
    );
};

export default App;