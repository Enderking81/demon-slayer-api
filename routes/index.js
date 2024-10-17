const express = require('express');
const router = express.Router();

// Importar las rutas
const charactersRouter = require('./characters');
const episodesRouter = require('./episodes');

// Usar las rutas
router.use('/characters', charactersRouter);
router.use('/episodes', episodesRouter);

// Ruta de prueba para comprobar que el enrutador está funcionando
router.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de Demon Slayer!');
});

// Exportar el router
module.exports = router;
