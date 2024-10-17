const express = require('express');
const router = express.Router();
const episodes = require('../data/episodes');

// Obtener todos los episodios
router.get('/', (req, res) => {
    res.json(episodes);
});

// Obtener un episodio por ID
router.get('/:id', (req, res) => {
    const episode = episodes.find(ep => ep.id === parseInt(req.params.id));
    if (!episode) return res.status(404).send('Episodio no encontrado');
    res.json(episode);
});

// Exportar el router
module.exports = router;
