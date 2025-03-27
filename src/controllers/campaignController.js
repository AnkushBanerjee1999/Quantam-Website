const CampaignService = require('../services/campaignService');
const { validationResult } = require('express-validator');

const createCampaign = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const campaign = await CampaignService.createCampaign(req.body, req.user.userId);
    res.status(201).json(campaign);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCampaigns = async (req, res) => {
  try {
    const campaigns = await CampaignService.listCampaigns(req.query);
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const invest = async (req, res) => {
  try {
    const { amount, paymentMethodId } = req.body;
    const result = await CampaignService.invest(
      req.params.id,
      req.user.userId,
      amount,
      paymentMethodId
    );
    res.json({
      message: 'Investment successful',
      ...result
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCampaign,
  getCampaigns,
  invest
};