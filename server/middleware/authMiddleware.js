const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check for the authorization header
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    console.error("Token verification failed:", err); // Log the error for debugging
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }
};
