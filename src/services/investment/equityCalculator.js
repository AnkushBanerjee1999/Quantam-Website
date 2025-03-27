class EquityCalculator {
  static calculateEquityShare(amount, valuation, totalEquityPercentage) {
    const equityShare = (amount / valuation) * totalEquityPercentage;
    return Number(equityShare.toFixed(4));
  }

  static validateEquityAllocation(campaign, equityShare) {
    const totalAllocatedEquity = campaign.backers.reduce(
      (total, backer) => total + backer.equityShare,
      0
    );
    
    return (totalAllocatedEquity + equityShare) <= campaign.equity.percentage;
  }
}

module.exports = EquityCalculator;