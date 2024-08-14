const mongoose = require('mongoose');
const Tattoo = require('./models/Tattoo');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/tattoo_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function editTattoo(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    let tattooId = req.params.tattooId;
    let { type, imageUrl, description, userType, ownerId } = req.body;

    try {
        await Tattoo.findByIdAndUpdate({ _id: tattooId }, { $set: { type, imageUrl, description, userType, ownerId } });

        return res.status(200).json();
    } catch (e) {
        throw e;
    }
};

module.exports = { editTattoo };