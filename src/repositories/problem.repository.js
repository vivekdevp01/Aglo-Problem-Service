// const { NOT_FOUND } = require('http-status-codes');
const {Problem} =require('../models');
const NotFound = require('../errors/notfound');
class ProblemRepository{
  
     async createProblem(problemData){
        try{
      const problem=await Problem.create({
        title:problemData.title,
        description:problemData.description,
        testCases:(problemData.testCases)?problemData.testCases:[]
      });
      return problem;
        }
        catch(error){
            console.log(error);
            throw error;
        }
     }
     async getAllProblems(){
        try{
        const problems=await Problem.find({});
        return problems;
        }
        catch(error){
            console.error(error);
            throw error;
        }
     }
     async getProblem(id){
        try{
        const problem=await Problem.findById(id);
        console.log(problem);
        if(!problem){
            throw new NotFound("problem",id);
        }
        return problem;
        }
        catch(error){
            console.log(error);
            throw error;
        }
     }

}
module.exports=ProblemRepository;