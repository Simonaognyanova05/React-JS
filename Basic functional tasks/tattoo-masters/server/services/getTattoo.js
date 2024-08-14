const mongoose = require('mongoose');
const Tattoo = require('./models/Tattoo');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/tattoo_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getTattoo(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const tattoo = await Tattoo.find({});

        return tattoo;
    } catch (e) {
        throw e;
    }
};

module.exports = { getTattoo };