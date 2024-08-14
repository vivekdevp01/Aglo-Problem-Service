const {StatusCodes}=require('http-status-codes');
const NotImplemented = require('../errors/notimplemented.error');
function ping(req,res){
    return res.json({message:"hey"});
}
function addProblem(req,res,next){
    try{
    throw new NotImplemented('addProblem');
    }
    catch(error){
      next(error);
    }
   

}
function getProblem(req,res){
    
}
function getProblems(req,res){
    
}
function deleteProblem(req,res){
    
}
function updateProblem(req,res){
    
}


module.exports={
    ping,
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
 };
