const {
  send_success_message,
  send_error_message,
} = require("../../helper/resStructure");
const LoginService = require("../Services/login.service");

const get_question = async (req, res, next) => {
  try {
    let questions = await LoginService.getQuestionsForLogin();
    let randomQuestionIndex = Math.floor(Math.random() * questions.length);
    send_success_message(questions[randomQuestionIndex], req, res, next);
  } catch (err) {
    console.log(err);
    send_error_message(err, req, res, next);
  }
};
const post_answer = async (req, res, next) => {
  let question_id = req.body.id;
  let answer = req.body.answer;
  if (!question_id) {
    send_error_message("question id missing", req, res, next);
  }
  try {
    let questionById = await LoginService.getQuestionById(question_id);
    console.log(questionById.answer, answer);
    send_success_message(questionById.answer === answer, req, res, next);
  } catch (err) {
    send_error_message(err, req, res, next);
  }
};

module.exports = {
  get_question,
  post_answer,
};
