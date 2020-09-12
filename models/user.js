const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MaintainSchema = new Schema({
  part: { type: String, required: true },
  fluid: { type: String, required: false },
  amount: { type: Number, required: false },
  measurement: { type: String, required: false },
  mile: { type: Number, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, default: Date.now },

});

const TripSchema = new Schema({
  title: { type: String, required: true },
  destination: { type: String, required: true },
  trail: { type: String, required: true },
  date: { type: Date, default: Date.now },
  details: { type: String, required: true },

});

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: 5, max: 20 },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  maintains: [MaintainSchema],
  trips: [TripSchema]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
