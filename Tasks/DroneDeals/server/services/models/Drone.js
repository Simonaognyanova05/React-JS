const mongoose = require('mongoose');

const mongooseSchema = new mongoose.Schema({
    model: {type: String, required: true},
    imageUrl: {type: String, required: true},
    price: {type: Number, required: true},
    condition: {type: String, required: true},
    weight: {type: Number, required: true},
    phone: {type: String, required: true},
    description: {type: String, required: true}
});

const Drone = mongoose.model('Drone', mongooseSchema);

module.exports = Drone;