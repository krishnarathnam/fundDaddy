const Campaign = require("../models/campaign");

eexports.createCampaign = async (req, res) => {
  const { title, description, targetAmount, image } = req.body;
  const campaign = new Campaign({
    title,
    description,
    targetAmount,
    category,
    location,
    endDate,
    image,
    creator: req.user.id,
  });
  await campaign.save();
  res.status(201).json(campaign);
};

exports.getAllCampaigns = async (req, res) => {
  const campaigns = await Campaign.find().populate("creator", "name");
  res.json(campaigns);
  console.log(campaigns);
};


exports.deleteCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) return res.status(404).json({ message: 'Campaign not found' });

    // Allow deletion only by the owner
    if (campaign.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to delete this campaign' });
    }

    await campaign.remove();
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
