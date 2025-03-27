const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  fundingGoal: {
    type: Number,
    required: true,
    min: 0
  },
  currentFunding: { 
    type: Number, 
    default: 0 
  },
  equity: {
    percentage: {
      type: Number,
      required: true,
      min: 0,
      max: 100
    },
    valuation: {
      type: Number,
      required: true
    }
  },
  industry: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['Draft', 'Under Review', 'Active', 'Funded', 'Closed'],
    default: 'Draft'
  },
  documents: [{
    title: String,
    type: String,
    url: String,
    isPublic: Boolean
  }],
  backers: [{
    investor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    amount: Number,
    equityShare: Number,
    transactionId: String,
    status: {
      type: String,
      enum: ['Pending', 'Completed', 'Failed'],
      default: 'Pending'
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  }],
  metrics: {
    views: { type: Number, default: 0 },
    favorites: { type: Number, default: 0 },
    engagementScore: { type: Number, default: 0 }
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

CampaignSchema.index({ industry: 1, status: 1 });
CampaignSchema.index({ 'metrics.engagementScore': -1 });

module.exports = mongoose.model('Campaign', CampaignSchema);