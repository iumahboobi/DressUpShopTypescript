const Product = require('../models/Product')

//1. Create a Product
exports.createProduct = async (req, res) => {

    try {

        const productsToAdd = req.body
        const addedProducts = []

        // iterate through each product in the request body
        for (const productData of productsToAdd) {

            // check if the product already in Database is
            const existingProduct = await Product.findOne({ title: productData.title })

            if (existingProduct) {

                res.status(409).json({ error: `Product already exist with title name: ${productData.title}` })
                return
            }
            else {
                const newProduct = await Product.create(productData);
                addedProducts.unshift(newProduct)
            }

        }

        res.status(201).json(product)

    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
}

//2. Get all Products
exports.getAllProducts = async (req, res) => {

    try {
        const products = await Product.find()
        res.json(products)

    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: 'Internal server error. Fetching data error!' })
    }
}

//3. Get Product by Id
exports.getProductById = async (req, res) => {

    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }
        res.json(product)

    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
}

//4. Update product by Id
exports.updateProductById = async (req, res) => {

    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        console.log('product', product)
        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }
        res.json(product)
    } catch (error) {
        res.status(500).json('Internal server error')
    }
}

//5. Delete product by id
exports.deleteProductById = async (req, res) => {

    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) {

            return res.status(404).json({ error: 'Product not found' })
        }
        res.json({ message: 'Product delete Successfully' })

    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })

    }
}