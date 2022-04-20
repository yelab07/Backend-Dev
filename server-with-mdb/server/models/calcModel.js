const mongoose = require("mongoose");

const calcSchema = new mongoose.Schema({
  a: { type: Number },
  b: { type: Number },
  c: { type: String },
});

module.exports = Calc = mongoose.model("Calc", calcSchema);
