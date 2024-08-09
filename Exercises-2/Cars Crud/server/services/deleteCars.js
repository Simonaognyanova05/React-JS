const mongoose = require('mongoose');
const Car = require('./models/Car');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function deleteCars(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { brand, model } = req.body;
    try {
        await Car.findOneAndDelete({ brand, model });
        res.redirect('/cars');
    } catch (e) {
        throw e;
    }
};

module.exports = { deleteCars };