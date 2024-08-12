const mongoose = require('mongoose');
const Album = require('./models/Album');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function create(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { name, imgUrl, price, releaseDate, artist, genre, description, ownerId } = req.body;

    try {
        const album = new Album({ name, imgUrl, price, releaseDate, artist, genre, description, ownerId });

        await album.save();
        return res.status(200).json();
    } catch (e) {
        throw e;
    }
};

module.exports = { create };