// src/App.js
import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
    return (
        <div className="App">
            <h1>Aplicación TODO</h1>
            <TodoForm />
            <TodoList />
        </div>
    );
}

export default App;