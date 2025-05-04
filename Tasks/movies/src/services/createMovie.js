const mongoose = require('mongoose');
const Movie = require('./models/Movie');

const dbUrl = 'mongodb+srv://hotel_db:123hotel@cluster0.xqz9vjy.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function createMovie(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { title, year, time } = req.body;

    try {
        const movie = new Movie({
            title, year, time,
        })

        await movie.save();
        return res.status(200).json();
    }catch{
        console.log("Error");
    }
}

module.exports = { createMovie }