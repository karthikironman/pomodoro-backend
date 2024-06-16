const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const pomo_controller = require("../Controller/pomo.controller.js")

router.get("/get_today",pomo_controller.get_pomo);
router.post("/set_today",pomo_controller.post_pomo);

module.exports = router;