// src/components/TodoList.tsx
import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types/Todo';

interface TodoListProps {
    todos: Todo[];
    onToggleComplete: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleComplete, onDelete }) => {
    return (
        <div>
            <h2 className='todo-list-title'>Lista de Tareas</h2>
            <div className='todo-list'>
                <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggleComplete={onToggleComplete}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
            </div>
            
        </div>
    );
};

export default TodoList;