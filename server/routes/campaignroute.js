const express = require("express");
const Campaign = require("../models/campaign");
const {
  createCampaign,
  getAllCampaigns,
  donate,
  deleteCampaign,
} = require("../controllers/campaigncontroller");
const { authMiddleware } = require("../middleware/authmiddleware");
const router = express.Router();
const mongoose = require("mongoose");

router.post("/", authMiddleware, createCampaign);
router.get("/", getAllCampaigns);
router.get("/my-campaigns", authMiddleware, async (req, res) => {
  try {
    const campaigns = await Campaign.find({ creator: req.user.id }).populate("creator", "name email");
    res.json(campaigns);
  } catch (error) {
    console.error("Error fetching user campaigns:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Attempting to find campaign with ID:", id);
    
    // Validate MongoDB ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid MongoDB ObjectId format");
      return res.status(400).json({ message: "Invalid campaign ID format" });
    }

    const campaign = await Campaign.findById(id).populate("creator", "name email");
    console.log("Campaign found:", campaign);

    if (!campaign) {
      console.log("No campaign found with ID:", id);
      return res.status(404).json({ message: "Campaign not found" });
    }

    res.status(200).json(campaign);
  } catch (error) {
    console.error("Error fetching campaign:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.post("/:id/donate", authMiddleware, donate);
router.delete("/:id", authMiddleware, deleteCampaign);

module.exports = router;
