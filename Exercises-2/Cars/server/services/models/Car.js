const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: { type: String },
    model: { type: String },
    year: { type: Number }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;