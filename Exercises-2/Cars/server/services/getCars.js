const mongoose = require('mongoose');
const Car = require('./models/Car');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

module.exports = async function getCars() {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const cars = await Car.find({});
        return cars;
    } catch (e) {
        throw e;
    }
}