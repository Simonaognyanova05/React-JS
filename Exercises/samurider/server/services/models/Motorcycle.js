const mongoose = require('mongoose');

const motorSchema = new mongoose.Schema({
    model: { type: String, required: true },
    imageUrl: { type: String, required: true },
    year: { type: Number, required: true },
    mileage: { type: Number, required: true },
    contact: { type: String, required: true },
    about: { type: String, required: true }
});

const Motorcycle = mongoose.model('Motorcycle', motorSchema);

module.exports = Motorcycle;