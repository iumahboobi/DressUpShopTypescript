const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const registerSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});


//presaved hook to hash password
registerSchema.pre('save', async function (next) {

    if (!this.isModified('password')) {

        return next()
    }
    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next();
    }
    catch (error) {
        next(error)
    }
})

module.exports = mongoose.model('Register', registerSchema);