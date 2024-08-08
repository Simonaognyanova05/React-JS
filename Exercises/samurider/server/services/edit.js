const mongoose = require('mongoose');
const Motorcycle = require('./models/Motorcycle');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function editMotor(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { model, imageUrl, year, mileage, contact, about } = req.body;
    const motorId = req.params.motorId;

    try {
        await Motorcycle.findOneAndUpdate({ _id: motorId }, { $set: { model, imageUrl, year, mileage, contact, about } });
        res.redirect('/dashboard');
    } catch (e) {
        throw e;
    }
};

module.exports = { editMotor };