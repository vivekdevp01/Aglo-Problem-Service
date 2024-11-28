// const { NOT_FOUND } = require('http-status-codes');
const { Problem } = require("../models");
const NotFound = require("../errors/notfound");
const logger = require("../config/logger.config");
class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        codeStub: problemData.codeStub,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      console.log(problem);
      if (!problem) {
        throw new NotFound("problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteProblem(id) {
    try {
      const problem = await Problem.findByIdAndDelete(id);
      if (!problem) {
        logger.error(`problem with id ${id} is not found`);
        throw new NotFound("problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateProblem(id, problemData) {
    try {
      const problem = await Problem.findByIdAndUpdate(id, problemData, {
        new: true,
      });
      if (!problem) {
        throw new NotFound("problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
module.exports = ProblemRepository;
