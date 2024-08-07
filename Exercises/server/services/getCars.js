const mongoose = require('mongoose');
const Car = require('./models/Car');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getCars(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const car = await Car.find({});

        return car;
    } catch (e) {
        throw e;
    }
}

module.exports = { getCars };