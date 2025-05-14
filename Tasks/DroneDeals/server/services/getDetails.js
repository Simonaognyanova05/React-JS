const mongoose = require('mongoose');
const Drone = require('./models/Drone');

const dbUrl = 'mongodb+srv://hotel_db:123hotel@cluster0.xqz9vjy.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getDetails(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const droneId = req.params.droneId;
    try {
        const details = await Drone.findById(droneId);

        return details;
    } catch (e) {
        throw e;
    }
}

module.exports = { getDetails };