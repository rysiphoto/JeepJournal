const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MaintainSchema = new Schema({
  part: { type: String, required: true },
  fluid: { type: String, required: true },
  amount: { type: String, required: true },
  mile: { type: String, required: true },
  duration: { type: String, required: true },
  date: { type: Date, default: Date.now },

});

const Maintain = mongoose.model("Maintain", MaintainSchema);

module.exports = Maintain;
