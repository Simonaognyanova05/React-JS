const mongoose = require('mongoose');
const Drone = require('./models/Drone');

const dbUrl = 'mongodb+srv://hotel_db:123hotel@cluster0.xqz9vjy.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getDrone(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const drones = await Drone.find({});

        return drones;
    } catch (e) {
        throw e;
    }
};

module.exports = { getDrone };