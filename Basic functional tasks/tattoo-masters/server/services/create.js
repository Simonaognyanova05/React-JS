const mongoose = require('mongoose');
const Tattoo = require('./models/Tattoo');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/tattoo_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function create(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { type, imageUrl, description, userType } = req.body;

    try {
        const tattoo = new Tattoo({ type, imageUrl, description, userType });

        await tattoo.save();
        return res.status(200).json();
    } catch (e) {
        throw e;
    }
}

module.exports = { create };