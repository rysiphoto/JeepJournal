const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MaintainSchema = new Schema({
  part: { type: String, required: true },
  fluid: { type: String, required: false },
  amount: { type: String, required: false },
  mile: { type: String, required: true },
  duration: { type: String, required: true },
  date: { type: Date, default: Date.now }

});

const Maintain = mongoose.model("Maintain", MaintainSchema);

module.exports = Maintain;
