const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getListsByAgent } = require('../controllers/listController');

router.get('/by-agent', auth, getListsByAgent);

// You can also protect other routes like this:
router.get('/secure-data', auth, (req, res) => {
  res.send(`This is protected. Hello, user ${req.user.id}`);
});

module.exports = router;
