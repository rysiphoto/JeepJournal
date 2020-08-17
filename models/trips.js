const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TripSchema = new Schema({
  destination: { type: String, required: true },
  trails: { type: String, required: true },
  date: { type: Date, default: Date.now }

});

const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;
