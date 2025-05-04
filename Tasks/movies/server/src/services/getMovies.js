const mongoose = require('mongoose');
const Movie = require('./models/Movie');

const dbUrl = 'mongodb+srv://hotel_db:123hotel@cluster0.xqz9vjy.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function getMovies() {
    await mongoose.connect(dbUrl, connectionParams);

    try{
        const movies = await Movie.find({});
        console.log("Done");
        
        return movies;
    }catch{
        console.log("Error");
    }
}

module.exports = {getMovies}