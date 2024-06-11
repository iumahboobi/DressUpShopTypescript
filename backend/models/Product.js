const mongoose = require('mongoose')

// Define schema and model
const productSchema = new mongoose.Schema({
    id: String,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
        rate: Number,
        count: Number
    }
})
module.exports = mongoose.model('Product', productSchema)