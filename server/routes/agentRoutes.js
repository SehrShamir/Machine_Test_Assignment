const express = require('express');
const router = express.Router();

// Get all agents
router.get('/', (req, res) => {
  res.status(200).json({ agents: [] });
});

// Add a new agent
router.post('/add', (req, res) => {
  const { name, email, mobile, password } = req.body;
  // Simulated saving logic
  res.status(201).json({ message: 'Agent added successfully' });
});

module.exports = router;