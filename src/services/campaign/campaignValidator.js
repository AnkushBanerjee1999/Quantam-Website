const { ValidationError } = require('../../utils/errors');

class CampaignValidator {
  static validateCreation(campaignData) {
    if (!campaignData.title?.trim()) {
      throw new ValidationError('Campaign title is required');
    }

    if (!campaignData.fundingGoal || campaignData.fundingGoal <= 0) {
      throw new ValidationError('Valid funding goal is required');
    }

    if (!this.validateEquity(campaignData.equity)) {
      throw new ValidationError('Invalid equity configuration');
    }
  }

  static validateEquity(equity) {
    return equity?.percentage > 0 && 
           equity.percentage <= 100 && 
           equity.valuation > 0;
  }
}

module.exports = CampaignValidator;