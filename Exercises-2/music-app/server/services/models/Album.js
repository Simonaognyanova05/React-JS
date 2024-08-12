const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imgUrl: { type: String, required: true },
    price: { type: Number, required: true },
    releaseDate: { type: String, required: true },
    artist: { type: String, required: true },
    genre: { type: String, required: true },
    description: { type: String, required: true },
    ownerId: { type: String, required: true }
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;