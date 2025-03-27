const stripe = require('../config/stripe');

class PaymentService {
  static async createPaymentIntent(amount, currency = 'usd') {
    try {
      return await stripe.paymentIntents.create({
        amount: amount * 100,
        currency,
        confirm: true
      });
    } catch (error) {
      throw new Error(`Payment failed: ${error.message}`);
    }
  }
}

module.exports = PaymentService;