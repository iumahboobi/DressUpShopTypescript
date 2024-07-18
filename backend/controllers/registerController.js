const Register = require('../models/Register');

exports.createRegister = async (req, res) => {

    try {

        const registerToAdd = req.body
        const addedInfos = []

        console.log('Received Data', registerToAdd)

        // iterate through each product in the request body
        for (const registerData of registerToAdd) {

            // check if the product already in Database is
            const existingRegister = await Register.findOne({ email: registerData.email })

            if (existingRegister) {

                res.status(409).json({ error: `Product already exist with Last name: ${infoData.email}` })
                return
            }
            else {
                const newRegister = await Register.create(registerData);
                addedInfos.unshift(newRegister)
            }
        }
        res.status(201).json(Register)
    } catch (error) {
        res.status(500).json({ error: 'Internal ss server error' })
    }
}