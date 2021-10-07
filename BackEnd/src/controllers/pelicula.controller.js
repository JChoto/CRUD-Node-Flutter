const peliculaService = require('../services/pelicula.service');

const buscarPelicula = async(req,res)=>{

    res.json({

        peliculas:await peliculaService.buscarPelicula()

    });//End res.json

};//End buscarPelicula

const guardarPelicula = async (req,res)=>{

    console.log(req.body);

    res.json({
        pelicula: await peliculaService.guardarPelicula(req.body)
    });

}//End guadarPelicula


const eliminarPelicula = async (req, res)=>{
  console.log(req.params.id)
 res.json({
     pelicula:await peliculaService.eliminarPelicula(req.params.id)
 });
}//End eliminarPelicula

const modificarPelicula = async (req, res)=>{

    res.json({
        pelicula: await peliculaService.modificarPelicula(req.body)
    });

}//End modificarPelicula


module.exports = {buscarPelicula,guardarPelicula,eliminarPelicula,modificarPelicula};
