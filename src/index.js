// src/index.js
// necesaria para crear componentes de React.
import React from 'react';
// biblioteca específica para la manipulación del DOM en aplicaciones web. 
// Se encarga de montar los componentes React en el DOM del navegador.
import ReactDOM from 'react-dom';
import './index.css';
// Importa el componente App, que es el componente principal de la aplicación.
import App from './App';

// Monta el componente App en un elemento del DOM que tenga el ID root. Este elemento se encuentra en public/index.html.
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);