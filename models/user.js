const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const mongooseUniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;
// schema.plugin(mongooseUniqueValidator);
// const { schema } = require("./maintain", "./trips")


// const MaintainSchema = new Schema({
//   part: { type: String, required: true },
//   fluid: { type: String, required: false },
//   amount: { type: Number, required: false },
//   measurement: { type: String, required: false },
//   mile: { type: Number, required: true },
//   duration: { type: Number, required: true },
//   date: { type: Date, default: Date.now },

// });

// const TripSchema = new Schema({
//   title: { type: String, required: true },
//   destination: { type: String, required: true },
//   trail: { type: String, required: true },
//   date: { type: Date, default: Date.now },
//   details: { type: String, required: true },

// });

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: 5, max: 20 },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
  // maintains: [MaintainSchema],
  // trips: [TripSchema]
});



UserSchema.pre('save', function (next) {
  if (!this.isModified('password'))
    return next()
});
bcrypt.hash(this.password, 10, (err, passwordHash) => {
  if (err)
    return (err);
  this.password = passwordHash;
  next();
});

UserSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err)
      return cb(err);
    else {
      if (!isMatch)
        return cd(null, isMatch);
      return cb(null, this);
    }
  })
}

const User = mongoose.model("User", UserSchema);

module.exports = User;
