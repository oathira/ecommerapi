const mongoose = require('mongoose');

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Get the database connection instance
const db = mongoose.connection;

// Event handler for connection errors
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// Event handler for successful database connection
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

// Export the database connection instance
module.exports = db;
