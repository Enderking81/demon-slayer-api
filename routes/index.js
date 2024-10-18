const express = require('express');
const router = express.Router();


const charactersRouter = require('./characters');
const episodesRouter = require('./episodes');


router.use('/characters', charactersRouter);
router.use('/episodes', episodesRouter);

//para ver si anda el router
router.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de Demon Slayer!');
});


module.exports = router;


