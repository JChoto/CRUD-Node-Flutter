const {app} = require('./app');
const {dbConnect} = require('./database');

async function main(){

    await dbConnect();
    await app.listen(3000);


}//End 

main();
