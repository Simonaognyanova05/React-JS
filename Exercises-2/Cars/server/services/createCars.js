const mongoose = require('mongoose');
const Car = require('./models/Car');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

module.exports = async function createCars(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { brand, model, year } = req.body;

    try {
        const car = new Car({ brand, model, year });

        await car.save();
    } catch (e) {
        throw e;
    }
}