const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
  title: String,
  description: String,
  targetAmount: Number,
  raisedAmount: { type: Number, default: 0 },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  image: String,
});

module.exports = mongoose.model("Campaign", campaignSchema);
