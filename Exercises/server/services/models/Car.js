const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    model: { type: String },
    brand: { type: String },
    year: { type: Number }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;