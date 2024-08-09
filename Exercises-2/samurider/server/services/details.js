const mongoose = require('mongoose');
const Motorcycle = require('./models/Motorcycle');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getDetails(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const motorId = req.params.motorId;
    try {
        const motor = await Motorcycle.findById(motorId);
        return motor;
    } catch (e) {
        throw e;
    }
};

module.exports = { getDetails };