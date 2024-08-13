const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    type: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    userType: { type: String, required: true }
});

const Tattoo = mongoose.model('Tattoo', userSchema);

module.exports = Tattoo;