const mongoose = require('mongoose');

const mongooseSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
});

const User = mongoose.model('User', mongooseSchema);

module.exports = User;