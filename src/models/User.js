const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['startup', 'investor', 'admin'],
    required: true
  },
  profile: {
    name: String,
    company: String,
    industry: String,
    investmentPreferences: [String],
    location: String
  },
  verificationStatus: {
    isVerified: { type: Boolean, default: false },
    documents: [{
      type: String,
      documentType: String,
      status: String
    }]
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

UserSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

UserSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);