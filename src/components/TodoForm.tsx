// src/components/TodoForm.tsx
import React, { useState, useRef } from 'react';
import api from '../services/api';
import { Todo } from '../types/Todo';

interface TodoFormProps {
    onTodoAdded: (newTodo: Todo) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onTodoAdded }) => {
    const [title, setTitle] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (title.trim() === '') return;

        api.post<Todo>('', { title, completed: false })
            .then(response => {
                onTodoAdded(response.data);
                setTitle('');
                inputRef.current?.focus();
            })
            .catch(error => {
                console.error('Error creando la tarea:', error);
            });
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                type="text"
                className='todo-input'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                ref={inputRef}
            />
            <button type="submit" className='todo-button'>Añadir</button>
        </form>
    );
};

export default TodoForm;