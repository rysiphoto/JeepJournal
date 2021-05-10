const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  confirmPassword: { type: String, required: true, minlength: 5 },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  vehicleMake: { type: String, required: true },
  vehicleModel: { type: String, required: true },
  vehicleTrim: { type: String, required: false },
  vehicleYear: { type: String, required: false },
  vehicleColor: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
