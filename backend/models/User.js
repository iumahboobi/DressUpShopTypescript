const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true }
})

// Middleware to hash password before saving

userSchema.pre('save', async function (next) {

    if (!this.isModified('password')) return next()
    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch (error) {
        next(error)
    }
})
userSchema.methods.comparePassword = async function(candidatePassword){

    try {
        
        return await bcrypt.compare(candidatePassword,this.password)

    } catch (error) {
    
        throw new Error('Error Comparing Passwords')
    }

}

const User = mongoose.model('User',userSchema)
module.exports = User