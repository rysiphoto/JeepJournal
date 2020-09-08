const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MaintainSchema = new Schema({
  part: { type: String, required: true },
  fluid: { type: String, required: false },
  amount: { type: Number, required: false },
  mile: { type: Number, required: true },
  duration: { type: String, required: true },
  date: { type: Date, default: Date.now }

});

const Maintain = mongoose.model("Maintain", MaintainSchema);

module.exports = Maintain;
