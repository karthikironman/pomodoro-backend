const mongoose = require("mongoose");
const Login = require("../Model/login.model");

const getQuestionsForLogin = async () => {
//return all the questions form the database
  let questions = await Login.find({});
  questions = questions.map((x) => {
    return {
      id: x._id,
      question: x.question,
    //   answer:x.answer
    };
  });
  return questions;
};

const getQuestionById = async ( id ) => {
    let question = await Login.findById(id);
    return question;
}

module.exports = {
  getQuestionsForLogin,
  getQuestionById
};
