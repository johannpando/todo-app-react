import React, {useState} from "react";
import api from "../services/api";

const TodoForm = ( { onTodoAdded } ) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Crear una nueva tarea
        api.post('', { title, completed: false })
            .then(response => {
                onTodoAdded(response.data);
                setTitle('');
            })
            .catch(error => {
                console.error('Error creating todo:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nueva tarea"
            />
            <button type="submit">Añadir</button>
        </form>
    );
};

export default TodoForm;