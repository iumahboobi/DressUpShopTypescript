const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes')
const infoRoutes = require('./routes/infoRoutes')
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb://localhost:27017'


// Middleware
app.use(express.json({limit:'50mb'}))

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  }));

// Connect to MongoDB
mongoose.connect(`${MONGODB_URI}/DressUp`, {
useNewUrlParser:true,
useUnifiedTopology:true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'))
db.once('open', async () => {
    console.log('Connected to MongoDB successfuly 🚀');
});

// Routes
app.use('/api', productRoutes)
app.use('/api/infos', infoRoutes)

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🌐`);
});