const mongoose = require('mongoose');

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
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;

const ProductModel = require('./models/productModel'); // Import the ProductModel schema

const saveDataToDatabase = async (data) => {
  try {
    const result = await ProductModel.create(data);
    console.log('Data saved to database:', result);
  } catch (error) {
    console.error('Error saving data to database:', error);
  }
};

// Example data to save
const products = [
  {
    id: '1',
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest...",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  },
  // Include other products here
];

// Call the function to save the data
saveDataToDatabase(products);
