const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes')
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb://localhost:27017'

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(`${MONGODB_URI}/DressUp`, {});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'))
db.once('open', async () => {
    console.log('Connected to MongoDB successfuly 🚀');
});

// Routes
app.use('/api', productRoutes)

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🌐`);
});