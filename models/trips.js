const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TripsSchema = new Schema({
  destination: { type: String, required: true },
  trails: { type: String, required: true },
  date: { type: Date, default: Date.now }

});

const Trips = mongoose.model("Trips", TripsSchema);

module.exports = Trips;
