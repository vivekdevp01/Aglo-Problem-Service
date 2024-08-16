const sanitizeMarkdownContent = require("../utils/markdownSantizer");


class ProblemService{
     constructor(problemRepository){
        this.problemRepository = problemRepository;
     }

     async createProblem(problemData){
        // sanitize the RTCSessionDescription
      try {
        problemData.description=sanitizeMarkdownContent(problemData.description);
        // console.log(problemData);
        const problem=await this.problemRepository.createProblem(problemData);
        // console.log(problem);
       return problem;
      } catch (error) {
        console.log(error);
        throw error;
      }
     }
     async getAllProblems(){
        // sanitize the RTCSessionDescription
        try {
        
        const problems=await this.problemRepository.getAllProblems();
        // console.log(problems);
       return problems;
     }
     catch(error){
        console.log(error);
        throw error;
     }
}
async getProblem(id){
   try{

      const problem=await this.problemRepository.getProblem(id);
      return problem;
   }
   catch(error){
      console.log(error);
      throw error;
   }
}
}
module.exports=ProblemService;