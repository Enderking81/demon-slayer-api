# Demon Slayer API

## Descripción

La API de Demon Slayer es un proyecto de ejemplo que proporciona una interfaz RESTful para acceder a información relacionada con la popular serie de anime y manga "Demon Slayer: Kimetsu no Yaiba". Esta API permite a los usuarios obtener detalles sobre personajes y episodios, así como realizar operaciones básicas como obtener, crear, actualizar y eliminar recursos.

## Funcionalidades

La API incluye los siguientes endpoints:

### 1. Personajes

- **GET /api/characters**: Obtiene una lista de todos los personajes.
- **GET /api/characters/:id**: Obtiene los detalles de un personaje específico.
- **POST /api/characters**: Crea un nuevo personaje.
- **PUT /api/characters/:id**: Actualiza la información de un personaje existente.
- **DELETE /api/characters/:id**: Elimina un personaje específico.

### 2. Episodios

- **GET /api/episodes**: Obtiene una lista de todos los episodios.
- **GET /api/episodes/:id**: Obtiene los detalles de un episodio específico.
- **POST /api/episodes**: Crea un nuevo episodio.
- **PUT /api/episodes/:id**: Actualiza la información de un episodio existente.
- **DELETE /api/episodes/:id**: Elimina un episodio específico.

## Requisitos

- Node.js
- npm o pnpm

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Enderking81/demon-slayer-api.git
