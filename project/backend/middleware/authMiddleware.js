// Example of an authentication middleware
const authMiddleware = (req, res, next) => {
  // Add authentication logic here
  next();
};

module.exports = authMiddleware;
