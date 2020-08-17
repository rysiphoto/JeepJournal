const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MaintainSchema = new Schema({
  part: { type: String, required: true },
  fluid: { type: String, required: true },
  amount: { type: String, required: true },
  date: { type: Date, default: Date.now },
  duration: { type: String, required: true }

});

const Maintain = mongoose.model("Maintain", MaintainSchema);

module.exports = Maintain;
