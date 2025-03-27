const Campaign = require('../../models/Campaign');
const PaymentProcessor = require('../payment/paymentProcessor');
const InvestmentValidator = require('../investment/investmentValidator');
const EquityCalculator = require('../investment/equityCalculator');
const CampaignValidator = require('./campaignValidator');
const CampaignMetrics = require('./campaignMetrics');
const { NotFoundError } = require('../../utils/errors');

class CampaignService {
  static async createCampaign(campaignData, userId) {
    CampaignValidator.validateCreation(campaignData);
    
    const campaign = new Campaign({
      ...campaignData,
      owner: userId,
      status: 'Draft'
    });
    
    return await campaign.save();
  }

  static async invest(campaignId, userId, amount) {
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

    const payment = await PaymentProcessor.processPayment(amount);
    
    if (payment.success) {
      campaign.backers.push({
        investor: userId,
        amount,
        equityShare,
        transactionId: payment.transactionId,
        status: 'Completed'
      });

      campaign.currentFunding += amount;
      if (campaign.currentFunding >= campaign.fundingGoal) {
        campaign.status = 'Funded';
      }

      await campaign.save();
      await CampaignMetrics.updateEngagementScore(campaign);
      
      return { transactionId: payment.transactionId, equityShare };
    }
  }
}

module.exports = CampaignService;