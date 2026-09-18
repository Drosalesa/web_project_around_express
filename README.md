# Proyecto Sprint 14: Tripleten web_project_around_express

## Descripción

Crear un servidor para la página "Around US" de modo que pueda responder las solicitudes de información de tarjetas y usuarios.
La información proviene de la base de datos local de MongoDB.

## Funciones

- GET /users devuelve una lista JSON con todos los usuarios
- POST /users crea un usuario nuevo
- GET /users/:id devuelve un objeto JSON
- GET /users/me devuelve los datos del usuario actual
- PATCH /users/me Actualiza el perfil
- PATCH /users/me/avatar Actualiza el avatar
- PUT /cards/:id/likes Le da like a una tarjeta
- DELETE /cards/:id/likest Le quita el like a una tarjeta
- GET /cards devuelve una lista JSON con todas las tarjetas
- POST /cards crea una nueva tarjeta
- DELETE /cards/:id elimina una tarjeta por su id
- Si el ID de la tarjeta o usuario no se encuentra el servidor entrega un error 404
- Middleware configurado para registrar logs en la terminal, deshabilitar funciones por mantenimiento y devolver el mensaje "Recurso no encontrado" al solicitar una ruta incorrecta
- El middleware atrapa los errores de validación y casting (400) y los errores del servidor (500) enviando un mensaje de error genérico al usuario.

## Tecnologías

- Express
- TypeScript
- Eslint
- Prettier
- MongoDB

## Herramientas

- VS Code
- Postman
- MongoDB Compass
