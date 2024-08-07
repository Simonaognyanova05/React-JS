const mongoose = require('mongoose');
const Car = require('./models/Car');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function updateCars(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { brand, model, year } = req.body;
    try {
        await Car.updateOne({ brand }, { $set: { brand, model, year } });
    } catch (e) {
        throw e;
    }
};

module.exports = { updateCars };