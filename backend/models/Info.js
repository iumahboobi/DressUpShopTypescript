const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    fname: String,
    lname: String,
});

module.exports = mongoose.model('Info', infoSchema);
