const mongoose = require('mongoose');
const Car = require('./models/Car');

const url = 'mongodb+srv://simonaognanova05:hSveutLkOPY3w73A@react-task.hujfarb.mongodb.net/?retryWrites=true&w=majority&appName=react-task';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

module.exports = async function createCar(req, res) {
    await mongoose.connect(url, connectionParams);

    const { brand, model, year } = req.body;
    try {
        const car = new Car({
            brand, model, year
        });

        await car.save();
    } catch (e) {
        throw e;
    }
}