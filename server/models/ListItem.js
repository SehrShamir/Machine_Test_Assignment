const mongoose = require('mongoose');

const listItemSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,   // you can make fields required if needed
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  notes: {
    type: String,
    default: ''
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',   // Make sure your user model is named 'User'
    required: false
  }
}, {
  timestamps: true   // optional: adds createdAt and updatedAt fields automatically
});

module.exports = mongoose.model('ListItem', listItemSchema);
