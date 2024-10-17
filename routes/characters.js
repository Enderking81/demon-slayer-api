const express = require('express');
const router = express.Router();
const characters = require('../data/characters');

// Obtener todos los personajes
router.get('/', (req, res) => {
    res.json(characters);
});

// Obtener un personaje por ID
router.get('/:id', (req, res) => {
    const character = characters.find(c => c.id === parseInt(req.params.id));
    if (!character) return res.status(404).send('Personaje no encontrado');
    res.json(character);
});

// Exportar el router
module.exports = router;
