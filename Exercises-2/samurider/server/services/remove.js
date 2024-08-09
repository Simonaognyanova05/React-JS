const mongoose = require('mongoose');
const Motorcycle = require('./models/Motorcycle');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function removeMotor(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const motorId = req.params.motorId;

    try {
        await Motorcycle.findByIdAndDelete(motorId);
        res.redirect('/dashboard');
    } catch (e) {
        throw e;
    }
};

module.exports = { removeMotor }