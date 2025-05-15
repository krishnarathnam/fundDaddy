const express = require("express");
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
router.post("/:id/donate", authMiddleware, donate);

// Fix here: Use authMiddleware instead of authenticateUser
router.delete('/:id', authMiddleware, deleteCampaign); // Now using the correct authMiddleware

module.exports = router;
