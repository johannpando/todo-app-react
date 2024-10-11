// src/components/TodoItem.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
    return (
        <li style={styles.todoItem}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleComplete(todo.id, !todo.completed)}
                style={styles.checkbox}
            />
            <span style={{ ...styles.todoText, textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
            </span>
            <FontAwesomeIcon
                icon={faTrash}
                onClick={() => onDelete(todo.id)}
                style={styles.deleteIcon}
            />
        </li>
    );
};

const styles = {
    todoItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        borderBottom: '1px solid #ccc',
    },
    checkbox: {
        marginRight: '10px',
    },
    todoText: {
        flex: 1,
        marginRight: '10px',
    },
    deleteIcon: {
        color: 'red',
        cursor: 'pointer',
    },
};

export default TodoItem;