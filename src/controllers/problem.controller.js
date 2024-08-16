const {StatusCodes}=require('http-status-codes');
const NotImplemented = require('../errors/notimplemented.error');
const ServiceUnavailable = require('../errors/serviceunavailable.error');
const {ProblemService}=require('../services');
const {ProblemRepository}=require('../repositories');
const errorHandler=require('../utils/errorHandler');

const problemService=new ProblemService(new ProblemRepository());
function ping(req,res){
    return res.json({message:"hey"});
}
async function addProblem(req,res,next){
    try{
    const newproblem=await problemService.createProblem(req.body);
    return res.status(StatusCodes.OK).json({
        success:true,
        message:'Problem added successfully',
        data:newproblem
    })
    // console.log(newproblem);
    }
    catch(error){
      next(error);
    }
    // try{
    //     throw new ServiceUnavailable('getProblem');
    //     }
    //     catch(error){
    //       next(error);
    //     }
   

} 
async function getProblem(req,res,next){
   try {
    const problem=await problemService.getProblem(req.params.id)
    return res.status(StatusCodes.OK).json({
        success:true,
        message:'Problem retrieved successfully',
        data:problem
    })
   } catch (error) {
    next(error);
   }
}
async function getProblems(req,res,next){
    try {
        const problems=await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success:true,
            message:'Problems retrieved successfully',
            data:problems
        })
    } catch (error) {
        next(error);
    }
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
