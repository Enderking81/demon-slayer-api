# Cómo Usar la API Demon Slayer

Esta API permite manejar personajes de Demon Slayer mediante operaciones CRUD básicas (Crear, Leer, Actualizar, Eliminar). A continuación, se describen las diferentes rutas y cómo interactuar con ellas.

## Iniciar la API

Para usar la API, asegúrate de tener la aplicación en funcionamiento. Puedes iniciarla con el siguiente comando:

```bash
node server.js
```

El servidor estará corriendo en `http://localhost:3000`.

## Endpoints de la API

### Obtener Todos los Personajes

**Método:** `GET`  
**Ruta:** `/api/characters`

#### Ejemplo de Uso

```bash
curl http://localhost:3000/api/characters
```

### Obtener un Personaje por ID

**Método:** `GET`  
**Ruta:** `/api/characters/:id`

#### Ejemplo de Uso

```bash
curl http://localhost:3000/api/characters/1
```

### Crear un Nuevo Personaje

**Método:** `POST`  
**Ruta:** `/api/characters`  
**Cuerpo:** JSON con los detalles del personaje.

#### Ejemplo de Uso

```bash
curl -X POST http://localhost:3000/api/characters -H "Content-Type: application/json" -d '{
  "name": "Tanjiro Kamado",
  "role": "Protagonist",
}'
```

### Eliminar un Personaje por ID

**Método:** `DELETE`  
**Ruta:** `/api/characters/:id`

#### Ejemplo de Uso

```bash
curl -X DELETE http://localhost:3000/api/characters/1
```

## Ejemplos de Respuestas

### Respuesta de `GET /api/characters`

```json
[
  {
    "id": 1,
    "name": "Tanjiro Kamado",
    "role": "Protagonist",
  },
  {
    "id": 2,
    "name": "Nezuko Kamado",
    "role": "Supporting",

  }
]
```

### Respuesta de `POST /api/characters`

```json
{
  "id": 3,
  "name": "Inosuke Hashibira",
  "role": "Supporting",
}
```

### Nota

- Todos los endpoints utilizan `JSON` para enviar y recibir datos.
- Asegúrate de incluir `Content-Type: application/json` en el encabezado al hacer solicitudes `POST` y `PUT`.
