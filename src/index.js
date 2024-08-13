const express=require('express');
const bodyParser = require('body-parser');



const {PORT}=require('./config/server.config');


const app= express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.get('/ping',(req,res)=>{
    return res.json({message:"It is running"});
})
app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
})




