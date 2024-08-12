const mongoose = require('mongoose');
const Album = require('./models/Album');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function deleteAlbum(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    let albumId = req.params.albumId;

    try {
        await Album.findByIdAndDelete(albumId);
        return res.status(200).json();
    } catch (e) {
        throw e;
    }
};

module.exports = { deleteAlbum };