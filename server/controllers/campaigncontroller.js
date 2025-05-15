const Campaign = require("../models/campaign");

exports.createCampaign = async (req, res) => {
    const { title, description, targetAmount, image, category, location, endDate } = req.body; // Get category, location, endDate from req.body
    const campaign = new Campaign({
        title,
        description,
        targetAmount,
        image,
        category,   // Use the variable
        location,   // Use the variable
        deadline: endDate, // Use the variable, and I renamed it to deadline in the model for consistency
        creator: req.user.id,
    });
    await campaign.save();  // Corrected typo
    res.status(201).json(campaign);
};

exports.getAllCampaigns = async (req, res) => {
    try {
        const { status } = req.query; // Get status from req.query
        let filter = {};

        if (status) {
            filter.status = status;
        }

        const campaigns = await Campaign.find(filter).populate("creator", "name");
        res.json(campaigns);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch campaigns", details: error.message });
    }
};

exports.deleteCampaign = async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id);
        if (!campaign) return res.status(404).json({ message: 'Campaign not found' });

        // Allow deletion only by the creator
        if (campaign.creator.toString() !== req.user.id) { // Corrected to campaign.creator
            return res.status(403).json({ message: 'Not authorized to delete this campaign' });
        }

        await campaign.deleteOne(); // Changed from remove() to deleteOne()
        res.status(200).json({ message: 'Campaign deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting campaign' });
    }
};

exports.donate = async (req, res) => {
    const { amount } = req.body;
    const campaign = await Campaign.findById(req.params.id);
    campaign.raisedAmount += amount;
    await campaign.save();
    res.json(campaign);
};