const mongoose = require('mongoose');
const Movie = require('./models/Movie');

const dbUrl = 'mongodb+srv://hotel_db:123hotel@cluster0.xqz9vjy.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function updateMovie(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    const {title, year, time} = req.body;

    try{
        await Movie.updateOne({_id: req.params.movieId}, {$set: {title, year, time}});

        return res.status(200).json();
    }catch{
        console.log('Error');
    }
}

module.exports = {updateMovie};