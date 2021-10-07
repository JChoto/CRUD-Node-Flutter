const {Router} = require('express');

const {buscarPelicula, guardarPelicula, eliminarPelicula, modificarPelicula} = require('../controllers/pelicula.controller');
const router = Router();

router.get('/api/peliculas',buscarPelicula);
router.post('/api/peliculas/registrar',guardarPelicula);
router.delete('/api/peliculas/eliminar/:id',eliminarPelicula);
router.put('/api/peliculas/modificar',modificarPelicula);

module.exports = router;