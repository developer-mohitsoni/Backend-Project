const mongoose = require("mongoose");

// Create schema for Camps
const campSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  bankId: { type: mongoose.Schema.Types.ObjectId, ref: "BloodBanks" },
  organizer: { type: String, required: true },
  contact: { type: Number, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  donors: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "Users", unique: true },
      units: { type: Number, required: true, default: 0 },
      status: { type: Number, enum: [0, 1], default: 0 },
    },
  ],
});

// Create model for Camps
const Camp = mongoose.model("Camps", campSchema);

module.exports = Camp;
