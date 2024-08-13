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
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
}));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../frontend/build'))); // Add this line

// Serve React frontend for any other route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});

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

// Routes
app.use('/api', productRoutes);
app.use('/api/infos', infoRoutes);
app.use('/api/auth', userRoutes);

// Serve React frontend for any other route
app.get('*', (req, res) => { // Add this line and the next line
    res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🌐`);
});
