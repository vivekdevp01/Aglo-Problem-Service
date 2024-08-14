const mongoose=require('mongoose');
const { MONGO_URL } = require('./server.config');

async function connectToDB(){
try{
 await mongoose.connect(MONGO_URL);
}
catch(err){
    console.log("unable to connect to Db");
    console.log(err);
}
}

module.exports=connectToDB;