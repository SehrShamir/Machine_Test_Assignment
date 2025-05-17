// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const authRoutes = require('./server/routes/authRoutes');
const agentRoutes = require('./server/routes/agentRoutes');
const listRoutes = require('./server/routes/listRoutes');

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/agents', agentRoutes);
app.use('/api/lists', listRoutes);

app.use((req, res, next) => {
  console.log('INCOMING PATH:', req.path);
  next();
});

// Serve frontend in production
const clientBuildPath = path.join(__dirname, 'client', 'build');
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(clientBuildPath));

  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}

// Database connection & Server start
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('❌ MONGO_URI is not defined in environment variables.');
  process.exit(1);
}

mongoose.connect(process.env.MONGO_URI)

  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });
