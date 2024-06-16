const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const login_controller = require("../Controller/login.controller.js")

router.get("/question",login_controller.get_question);
router.post("/question",login_controller.post_answer);

module.exports = router;