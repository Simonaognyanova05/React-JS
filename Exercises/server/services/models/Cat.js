const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    breed: { type: String },
    img: { type: String },
    ownerId: { type: String },
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;