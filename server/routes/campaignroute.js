const express = require("express");
const Campaign = require("../models/campaign");
const {
  createCampaign,
  getAllCampaigns,
  donate,
  deleteCampaign, // Make sure you import this
} = require("../controllers/campaigncontroller");
const { authMiddleware } = require("../middleware/authmiddleware"); // This is the correct middleware
const router = express.Router();

router.post("/", authMiddleware, createCampaign);
router.get("/", getAllCampaigns);

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const campaign = await campaign.findById(id).populate("createdBy", "name email");

    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }

    res.status(200).json(campaign);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.post("/:id/donate", authMiddleware, donate);

// Fix here: Use authMiddleware instead of authenticateUser
router.delete('/:id', authMiddleware, deleteCampaign); // Now using the correct authMiddleware

module.exports = router;
