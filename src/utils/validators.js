const { body } = require('express-validator');

const registerValidation = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('role').isIn(['startup', 'investor']).withMessage('Invalid role'),
  body('profile').isObject().withMessage('Profile information is required')
];

const loginValidation = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').exists().withMessage('Password is required')
];

const campaignValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('fundingGoal').isNumeric().withMessage('Valid funding goal is required'),
  body('equity.percentage').isFloat({ min: 0, max: 100 }).withMessage('Valid equity percentage is required'),
  body('equity.valuation').isNumeric().withMessage('Valid valuation is required'),
  body('industry').notEmpty().withMessage('Industry is required')
];

const investValidation = [
  body('amount').isNumeric().withMessage('Valid amount is required'),
  body('paymentMethodId').notEmpty().withMessage('Payment method is required')
];

module.exports = {
  registerValidation,
  loginValidation,
  campaignValidation,
  investValidation
};