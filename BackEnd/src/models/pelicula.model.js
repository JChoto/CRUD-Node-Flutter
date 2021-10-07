const {Schema, model} = require('mongoose');

const peliculaSchema = new Schema({
    
    
    nombre:String,
    anio:String,
    elenco:[]
});//end peliculasSchema


peliculaSchema.method('toJSON', function () {
 
    const {
      __v,
      _id,
      ...object
    } = this.toObject();
    object.id = _id;
    return object;
  });


module.exports = model('Pelicula',peliculaSchema);


