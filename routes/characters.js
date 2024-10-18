const express = require('express');
const router = express.Router();
let characters = require('../data/characters');

// Obtener todos los personajes
router.get('/', (req, res) => {
    res.json(characters);
});

// Obtener un personaje por ID
router.get('/:id', (req, res) => {
    const characterId = parseInt(req.params.id);
    const character = characters.find(c => c.id === characterId);

    if (!character) {
        return res.status(404).json({ message: 'Personaje no encontrado' });
    }

    res.json(character);
});

// Crear un nuevo personaje
router.post('/', (req, res) => {
    const newCharacter = {
        id: characters.length + 1,
        ...req.body
    };

    characters.push(newCharacter);
    res.status(201).json(newCharacter);
});

// actualiza el pj de la id que le diste
router.put('/:id', (req, res) => {
    const characterId = parseInt(req.params.id);
    const characterIndex = characters.findIndex(c => c.id === characterId);

    if (characterIndex === -1) {
        return res.status(404).json({ message: 'Personaje no encontrado' });
    }

    characters[characterIndex] = {
        ...characters[characterIndex],
        ...req.body
    };

    res.json(characters[characterIndex]);
});

// elimina con la id
router.delete('/:id', (req, res) => {
    const characterId = parseInt(req.params.id);
    const characterIndex = characters.findIndex(c => c.id === characterId);

    if (characterIndex === -1) {
        return res.status(404).json({ message: 'Personaje no encontrado' });
    }

    characters.splice(characterIndex, 1);
    res.status(204).send();
});

module.exports = router;
