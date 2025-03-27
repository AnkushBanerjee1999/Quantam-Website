const stripe = require('../../config/stripe');
const { ValidationError } = require('../../utils/errors');

class PaymentProcessor {
  static async processPayment(amount, currency = 'usd') {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency,
        confirm: true
      });
      
      return {
        success: paymentIntent.status === 'succeeded',
        transactionId: paymentIntent.id,
        status: paymentIntent.status
      };
    } catch (error) {
      throw new ValidationError(`Payment processing failed: ${error.message}`);
    }
  }
}

module.exports = PaymentProcessor;