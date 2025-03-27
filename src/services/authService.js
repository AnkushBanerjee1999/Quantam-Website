const User = require('../models/User');
const jwt = require('jsonwebtoken');

class AuthService {
  static async register(userData) {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error('Email already registered');
    }

    const user = new User(userData);
    await user.save();

    const token = this.generateToken(user);
    return { token, user: this.sanitizeUser(user) };
  }

  static async login(email, password) {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid credentials');
    }

    const token = this.generateToken(user);
    return { token, user: this.sanitizeUser(user) };
  }

  static generateToken(user) {
    return jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
  }

  static sanitizeUser(user) {
    return {
      id: user._id,
      email: user.email,
      role: user.role,
      profile: user.profile
    };
  }
}

module.exports = AuthService;