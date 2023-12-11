// server/db.js
const mongoose = require('mongoose');
const Recipe = require('./models/Recipe');
const User = require('./models/User');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Export
module.exports = {
  Recipe,
  User,
};