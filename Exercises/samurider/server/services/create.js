const mongoose = require('mongoose');
const Motorcycle = require('./models/Motorcycle');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function create(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { model, imageUrl, year, mileage, contact, about } = req.body;

    try {
        const motor = new Motorcycle({
            model, imageUrl, year, mileage, contact, about
        });

        await motor.save();
    } catch (e) {
        throw e;
    }
};

module.exports = { create };