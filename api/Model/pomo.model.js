const mongoose = require("mongoose");

const loginSchema = mongoose.Schema({
  timestamp: { type: Number, required: true, unique: true },
  selected: {
    type: [Number],
    required: true,
  },
});

module.exports = mongoose.model("Pomo", loginSchema);
