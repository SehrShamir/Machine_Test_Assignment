const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
});

module.exports = mongoose.model('Agent', agentSchema);
