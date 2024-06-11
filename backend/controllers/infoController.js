const Info = require('../models/Info');

exports.createInfo = async (req, res) => {

    try {

        const infoToAdd = req.body
        const addedInfos = []

        console.log('Received Data', infoToAdd)

        // iterate through each product in the request body
        for (const infoData of infoToAdd) {

            // check if the product already in Database is
            const existingInfo = await Info.findOne({ lname: infoData.lname })

            if (existingInfo) {

                res.status(409).json({ error: `Product already exist with Last name: ${infoData.lname}` })
                return
            }
            else {
                const newInfo = await Info.create(infoData);
                addedInfos.unshift(newInfo)
            }
        }
        res.status(201).json(Info)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
}
