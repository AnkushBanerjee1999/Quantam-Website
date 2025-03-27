class CampaignMetrics {
  static updateEngagementScore(campaign) {
    const viewWeight = 0.3;
    const favoriteWeight = 0.5;
    const backerWeight = 0.2;

    const viewScore = campaign.metrics.views * viewWeight;
    const favoriteScore = campaign.metrics.favorites * favoriteWeight;
    const backerScore = campaign.backers.length * backerWeight;

    campaign.metrics.engagementScore = viewScore + favoriteScore + backerScore;
    return campaign.metrics.engagementScore;
  }

  static async recordView(campaign) {
    campaign.metrics.views += 1;
    await this.updateEngagementScore(campaign);
    return campaign.save();
  }
}

module.exports = CampaignMetrics;