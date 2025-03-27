const { ValidationError } = require('../../utils/errors');

class InvestmentValidator {
  static validateInvestment(campaign, amount) {
    if (campaign.status !== 'Active') {
      throw new ValidationError('Campaign is not active for investment');
    }

    if (amount <= 0) {
      throw new ValidationError('Investment amount must be greater than 0');
    }

    const remainingFunding = campaign.fundingGoal - campaign.currentFunding;
    if (amount > remainingFunding) {
      throw new ValidationError(`Maximum investment amount allowed is ${remainingFunding}`);
    }
  }
}

module.exports = InvestmentValidator;