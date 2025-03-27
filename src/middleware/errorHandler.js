const { AppError } = require('../utils/errors');

const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  }

  // MongoDB duplicate key error
  if (err.code === 11000) {
    return res.status(400).json({
      status: 'fail',
      message: 'Duplicate field value entered'
    });
  }

  // MongoDB validation error
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(error => error.message);
    return res.status(400).json({
      status: 'fail',
      message: 'Validation failed',
      errors
    });
  }

  console.error('Error:', err);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong'
  });
};

module.exports = errorHandler;