const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title cannot be empty"],
  },
  description: {
    type: String,
    required: [true, "description cannot be empty"],
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: [true, "difficulty cannot be empty"],
    default: "easy",
  },
  testCases: [
    {
      input: {
        type: String,
        required: true,
      },
      output: {
        type: String,
        required: true,
      },
    },
  ],
  codeStub: [
    {
      language: {
        type: String,
        enum: ["JAVA", "PYTHON"],
        required: true,
      },
      startSnippet: {
        type: String,
      },
      userSnippet: {
        type: String,
      },
      endSnippet: {
        type: String,
      },
    },
  ],
  editorial: {
    type: String,
  },
});
const Problem = mongoose.model("Problem", problemSchema);
module.exports = Problem;
