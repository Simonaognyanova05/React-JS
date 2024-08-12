const mongoose = require('mongoose');
const Album = require('./models/Album');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getAlbums(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const albums = await Album.find({});

        return albums;
    } catch (e) {
        throw e;
    }
};

module.exports = { getAlbums };