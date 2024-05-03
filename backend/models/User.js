const mongoose = require("mongoose");

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const stock = {
  "A+": 0,
  "A-": 0,
  "B+": 0,
  "B-": 0,
  "AB+": 0,
  "AB-": 0,
  "O+": 0,
  "O-": 0,
};

// ------- User Model -------

// Create schema for Users
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  bloodGroup: { type: String, enum: bloodGroups, required: true },
  email: { type: String },
  phone: { type: Number, unique: true, required: true },
  password: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  address: { type: String },
});

// Create model for Users
const User = mongoose.model("Users", userSchema);

module.exports = User;
