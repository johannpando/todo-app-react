import axios from 'axios';

// Configuración base de Axios
const api = axios.create({
    baseURL: 'http://localhost:8080/api/todos', // URL base de tu backend
});

export default api;