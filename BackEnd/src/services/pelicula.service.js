const peliculaModel = require('../models/pelicula.model');


class PeliculaService {

    PeliculaService(){}

    async buscarPelicula(){

        try {
            
            return await peliculaModel.find();

        } catch (error) {
            
            return error;

        }//End trycatch

    }//End buscarPelicula
    
    async guardarPelicula(pelicula = new peliculaModel()){

        try {
            let clienteGuardar;
             await peliculaModel.create(pelicula).then((peli)=>{
                clienteGuardar = peli;
            });

            return clienteGuardar;

        } catch (error) {
            
            return error;

        }//End trycatch

    }//End guardarPelicula

    async eliminarPelicula(id){
        console.log("servicio: "+id)
        try {

            let msg="Error no se encontro Pelicula";
            await peliculaModel.findByIdAndDelete(id).then(
                msg = "Pelicula borrada"
            );
            return msg;
        } catch (error) {
            return error
        }//End tryCatch

    }//End eliminarPelicula


    async modificarPelicula(newData){

        let peliculaModificada;

        try {
            
            await peliculaModel.findByIdAndUpdate(newData.id,newData).then((value)=>{
                peliculaModificada = value;
            });

            return peliculaModificada;
        } catch (error) {
            console.log(error)
        }//End tryCatch

    }//end modificarPelicula


}//End PeliculaService

module.exports = new PeliculaService();