const Campaign = require('../models/Campaign');
const PaymentService = require('./paymentService');
const InvestmentValidator = require('./investment/investmentValidator');
const EquityCalculator = require('./investment/equityCalculator');
const { NotFoundError, ValidationError } = require('../utils/errors');

class CampaignService {
  static async createCampaign(campaignData, userId) {
    const campaign = new Campaign({
      ...campaignData,
      owner: userId
    });
    return await campaign.save();
  }

  static async listCampaigns({ industry, status, sort = 'createdAt', limit = 20 }) {
    const query = {};
    if (industry) query.industry = industry;
    if (status) query.status = status;

    return await Campaign.find(query)
      .sort(sort === 'popular' ? { 'metrics.engagementScore': -1 } : { createdAt: -1 })
      .populate('owner', 'profile.name profile.company')
      .limit(limit);
  }

  static async invest(campaignId, userId, amount, paymentMethodId) {
    const campaign = await Campaign.findById(campaignId);
    if (!campaign) {
      throw new NotFoundError('Campaign not found');
    }

    InvestmentValidator.validateInvestment(campaign, amount);

    const equityShare = EquityCalculator.calculateEquityShare(
      amount,
      campaign.equity.valuation,
      campaign.equity.percentage
    );

    if (!EquityCalculator.validateEquityAllocation(campaign, equityShare)) {
      throw new ValidationError('Equity allocation exceeds available percentage');
    }

    const paymentIntent = await PaymentService.createPaymentIntent(amount);
    
    if (paymentIntent.status === 'succeeded') {
      campaign.backers.push({
        investor: userId,
        amount,
        equityShare,
        transactionId: paymentIntent.id,
        status: 'Completed'
      });

      campaign.currentFunding += amount;
      
      if (campaign.currentFunding >= campaign.fundingGoal) {
        campaign.status = 'Funded';
      }

      await campaign.save();
      return { transactionId: paymentIntent.id, equityShare };
    }
    
    throw new ValidationError('Payment failed');
  }
}

module.exports = CampaignService;