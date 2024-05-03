const mongoose = require("mongoose");

// ------- Blood Bank Model -------

// Create schema for Blood Banks
const bloodBankSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hospital: { type: String, required: true },
  contactPerson: { type: String },
  category: { type: String, required: true },
  website: { type: String },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  address: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  requests: [
    {
      requestId: { type: mongoose.Schema.Types.ObjectId, ref: "Requests" },
    },
  ],
  donations: [
    {
      donationId: { type: mongoose.Schema.Types.ObjectId, ref: "Donations" },
    },
  ],
  stock: {
    "A+": { type: Number, default: 0 },
    "A-": { type: Number, default: 0 },
    "B+": { type: Number, default: 0 },
    "B-": { type: Number, default: 0 },
    "AB+": { type: Number, default: 0 },
    "AB-": { type: Number, default: 0 },
    "O+": { type: Number, default: 0 },
    "O-": { type: Number, default: 0 },
  },
});

// Create model for Blood Banks
const BloodBank = mongoose.model("BloodBanks", bloodBankSchema);

module.exports = BloodBank;
