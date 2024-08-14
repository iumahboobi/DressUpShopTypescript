const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const infoRoutes = require('./routes/infoRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/DressUp';

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(cors({
    origin: '*',
}));

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open', async () => {
    console.log('Connected to MongoDB successfully 🚀');
});

// Catch-all handler for any requests that don't match the API routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Routes
app.use('/api', productRoutes);
app.use('/api/infos', infoRoutes);
app.use('/api/auth', userRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🌐`);
});
