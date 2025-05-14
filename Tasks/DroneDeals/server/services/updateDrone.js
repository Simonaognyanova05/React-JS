const mongoose = require('mongoose');
const Drone = require('./models/Drone');

const dbUrl = 'mongodb+srv://hotel_db:123hotel@cluster0.xqz9vjy.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function updateDrone(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const droneId = req.params.droneId;
    const { model, imageUrl, price, condition, weight, phone, description } = req.body;

    try {
        await Drone.findByIdAndUpdate({ _id: droneId }, { $set: { model, imageUrl, price, condition, weight, phone, description } });

        return res.status(200).json();
    } catch (e) {
        throw el
    }
}

module.exports = { updateDrone };