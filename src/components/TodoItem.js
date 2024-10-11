import React from "react";

const TodoItem = ( { todo } ) => {
    return(
        <li>
            <span style={{ textDecoration: todo.completed ? 'line-trough' : 'none' }}>
                {todo.title}
            </span>
        </li>
    );
};

export default TodoItem;