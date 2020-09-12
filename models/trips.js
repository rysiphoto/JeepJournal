const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TripsSchema = new Schema({
  title: { type: String, required: true },
  destination: { type: String, required: true },
  trail: { type: String, required: true },
  date: { type: Date, default: Date.now },
  details: { type: String, required: true },
  user: { type: mongoose.Types.ObjectId, ref: 'User' }

});

const Trips = mongoose.model("Trips", TripsSchema);

module.exports = Trips;
