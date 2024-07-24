const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        console.log('Request Body:', req.body);

        // Check if req.body is an array
        if (!Array.isArray(req.body)) {
            return res.status(400).send({ message: 'Invalid request format. Expected an array of users.' });
        }

        const registrationPromises = req.body.map(async (userData) => {
            const { email, password } = userData;
            
            // Check for required fields
            if (!email || !password) {
                throw new Error('Missing required fields');
            }

            // Create and save each user
            const user = new User({ email, password });
            await user.save();
        });

        await Promise.all(registrationPromises);

        res.status(201).send({ message: 'Registration Successful' });
    } catch (error) {
        console.error('Error:', error);
        if (error.code === 11000) {
            res.status(400).send({ message: 'User with this Email already exists' });
        } else {
            res.status(500).send({ message: 'Failed To Register' });
        }
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).send({ message: 'Invalid Email or Password' });
        }

        const token = jwt.sign({ userId: user._id }, 'SECRET_KEY', { expiresIn: '1h' });
        res.send({ token, email:user.email });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ message: 'Failed to Log in' });
    }
};
