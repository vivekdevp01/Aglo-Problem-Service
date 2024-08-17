const dotenv=require('dotenv');
dotenv.config();

module.exports={
    PORT:process.env.PORT||3000,
    ATLAS_URL:process.env.ATLAS_URL,
    LOG_DB_URL:process.env.LOG_DB_URL
}
