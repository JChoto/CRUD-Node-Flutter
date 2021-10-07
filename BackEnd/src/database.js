const mongoose = require('mongoose');
const dbConnect = async()=>{

    try {
        
        console.log("Conectando DB...")

        await mongoose.connect('mongodb://localhost/dbPrueba',{

            useNewUrlParser: true,
      useUnifiedTopology: true,
      

        })//End connect

        console.log("Conectado...")

    } catch (error) {

        throw new Error(error);
                
    }//End tryCatch

}//End dbConnnect

module.exports={
    dbConnect
}//End module.exports
