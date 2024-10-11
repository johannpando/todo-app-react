# Aplicación TODO con React y Spring Boot

Este proyecto es una aplicación TODO construida con React en el frontend y Spring Boot en el backend. La aplicación permite a los usuarios gestionar una lista de tareas, donde pueden añadir nuevas tareas, marcarlas como completadas o pendientes, y eliminarlas. El backend en Spring Boot se encarga de la lógica del negocio y la persistencia de datos.

## Características

- **Añadir Tareas**: Los usuarios pueden añadir nuevas tareas a la lista.
- **Marcar como Completadas/Pendientes**: Cada tarea puede ser marcada como completada o pendiente usando un checkbox.
- **Eliminar Tareas**: Los usuarios pueden eliminar tareas de la lista.
- **Persistencia de Datos**: Las tareas se almacenan en una base de datos a través de un backend en Spring Boot.

## Tecnologías Utilizadas

### Frontend
- **React**: Biblioteca de JavaScript para construir la interfaz de usuario.
- **Axios**: Para manejar las solicitudes HTTP al backend.
- **Font Awesome**: Para los iconos utilizados en la interfaz.
- **CSS**: Para los estilos de la aplicación.

### Backend
- **Spring Boot**: Framework para el desarrollo del backend en Java.
- **H2 Database**: Base de datos en memoria para pruebas y desarrollo.
- **JPA (Java Persistence API)**: Para la persistencia de datos y la manipulación de la base de datos.

## Requisitos Previos

Para ejecutar esta aplicación, debes tener instalados los siguientes programas:
- **Node.js y npm**: Para ejecutar el frontend en React.
- **Java 8+ y Maven**: Para ejecutar el backend en Spring Boot.

## Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/usuario/todo-app.git
cd todo-app