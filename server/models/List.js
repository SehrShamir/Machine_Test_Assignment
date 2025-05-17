// server/models/List.js

const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  agentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent', required: true },
  items: [{ type: String }],
  distributedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('List', listSchema);
