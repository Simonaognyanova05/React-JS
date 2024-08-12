const mongoose = require('mongoose');
const Album = require('./models/Album');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};


async function updateAlbum(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const albumId = req.params.albumId;
    const { name, imgUrl, price, releaseDate, artistragons, genre, description } = req.body;

    try {
        await Album.findByIdAndUpdate({ _id: albumId }, { $set: { name, imgUrl, price, releaseDate, artistragons, genre, description } });
    } catch (e) {
        throw e;
    }
};

module.exports = { updateAlbum };