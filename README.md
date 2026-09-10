# Proyecto Sprint 13: Tripleten web_project_around_express

## Descripción

Crear un servidor para la página "Around US" de modo que pueda responder las solicitudes de información de tarjetas y usuarios.

## Funciones

- /users devuelve una lista JSON con los usuarios
- /cards devuelve una lista JSON con todas las tarjetas
- /users/:userId devuelve un objeto JSON con el user solicitado o un mensaje de error si el ID no existe
- Middleware configurado para registrar logs en la terminal, deshabilitar funciones por mantenimiento y devolver el mensaje "Recurso no encontrado" al solicitar una ruta incorrecta

## Tecnologías

- Express
- TypeScript
- Eslint
- Prettier

## Herramientas

- VS Code
- Postman
