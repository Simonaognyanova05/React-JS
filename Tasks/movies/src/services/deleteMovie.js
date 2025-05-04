const mongoose = require('mongoose');
const Movie = require('./models/Movie');

const dbUrl = 'mongodb+srv://hotel_db:123hotel@cluster0.xqz9vjy.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function deleteMovie(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    try{
        await Movie.deleteOne({_id: req.params.movieId});

        return res.status(200).json();
    }catch{
        console.log("Error");
    }
}

module.exports = {deleteMovie};