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

// ------- Requests Model -------

// Create schema for Patients
const bloodRequests = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  bankId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BloodBanks",
    required: true,
  },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  bloodGroup: { type: String, enum: bloodGroups, required: true },
  units: { type: Number, required: true },
  date: { type: String, required: true },
  reason: { type: String },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Denied", "Completed"],
    default: "Pending",
  },
});

// Create model for Patients
const Requests = mongoose.model("Requests", bloodRequests);

module.exports = Requests;
