// src/components/TodoForm.js
import React, { useState, useRef } from 'react';
import api from '../services/api';

const TodoForm = ({ onTodoAdded }) => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    // useref: Se usa para referenciar el campo de entrada y devolverle el foco después de añadir una tarea.
    const inputRef = useRef(null);

    // Maneja el evento de envío del formulario para crear una nueva tarea.
    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '') {
            setError('El título no puede estar vacío');
            return;
        }

        // Crear una nueva tarea
        api.post('', { title, completed: false })
            .then(response => {
                onTodoAdded(response.data);
                setTitle('');
                setError('');
                inputRef.current.focus(); // Devolver el foco a la caja de entrada
            })
            .catch(error => {
                console.error('Error creando la tarea:', error);
                setError('No se pudo añadir la tarea. Intenta nuevamente.');
            });
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nueva tarea"
                ref={inputRef}
                style={styles.input}
            />
            <button type="submit" style={styles.button}>Añadir</button>
            {error && <p style={styles.error}>{error}</p>}
        </form>
    );
};

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px',
    },
    input: {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '10px',
        fontSize: '16px',
    },
    button: {
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        marginBottom: '10px',
    },
    error: {
        color: 'red',
        fontSize: '14px',
    },
};

export default TodoForm;