const mongoose = require('mongoose');
const Album = require('./models/Album');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getDetails(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    let albumId = req.params.albumId;

    try {
        let album = await Album.findById(albumId);

        return album;
    } catch (e) {
        throw e;
    }
};

module.exports = { getDetails };