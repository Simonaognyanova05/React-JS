const mongoose = require('mongoose');
const Drone = require('./models/Drone');

const dbUrl = 'mongodb+srv://hotel_db:123hotel@cluster0.xqz9vjy.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function createDrone(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { model, imageUrl, price, condition, weight, phone, description } = req.body;

    try {
        const drone = new Drone({
            model, imageUrl, price, condition, weight, phone, description
        });

        await drone.save();
        return res.status(200).json();
    } catch (e) {
        throw e;
    }
}

module.exports = { createDrone };