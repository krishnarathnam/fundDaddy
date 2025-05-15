// routes/adminroute.js

const express = require("express");
const router = express.Router();

const { authMiddleware, adminMiddleware } = require("../middleware/authmiddleware");
const Campaign = require("../models/campaign");
const User = require("../models/user");

// Get all campaigns
router.get("/campaigns", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const campaigns = await Campaign.find().populate("creator", "name email");
    res.json(campaigns);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch campaigns" });
  }
});


// Delete a campaign
router.delete("/campaigns/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    await Campaign.findByIdAndDelete(req.params.id);
    res.json({ message: "Campaign deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete campaign" });
  }
});


// Get all users (Optional)
router.get("/users", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});


module.exports = router;
