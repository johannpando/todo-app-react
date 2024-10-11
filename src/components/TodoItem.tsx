// src/components/TodoItem.tsx
import React from 'react';
import { Todo } from '../types/Todo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface TodoItemProps {
    todo: Todo;
    onToggleComplete: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete, onDelete }) => {
    return (
        <li className='todo-item'>
            <input
                type="checkbox"
                checked={todo.completed}
                className='complete-button'
                onChange={() => onToggleComplete(todo.id, !todo.completed)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} className='todo-text'>
                {todo.title}
            </span>
            <FontAwesomeIcon
                icon={faTrash}
                onClick={() => onDelete(todo.id)}
                style={{ color: 'red', cursor: 'pointer' }}
            />
        </li>
    );
};

export default TodoItem;