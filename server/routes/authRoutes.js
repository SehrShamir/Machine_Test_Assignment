// server/routes/authRoutes.js
const express = require('express');
const router = express.Router();

// Login Route
router.post('/login', (req, res) => {
  // Simulated auth logic
  res.status(200).json({ message: 'Login successful' });
});

module.exports = router;