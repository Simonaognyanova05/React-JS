const mongoose = require('mongoose');
const Motorcycle = require('./models/Motorcycle');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getMotors() {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const motors = await Motorcycle.find({});

        return motors;
    } catch (e) {
        throw e;
    }
};

module.exports = { getMotors };
