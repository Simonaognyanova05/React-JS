const mongoose = require('mongoose');
const Tattoo = require('./models/Tattoo');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/tattoo_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function deleteTattoo(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    let tattooId = req.params.tattooId;

    try {
        await Tattoo.findByIdAndDelete(tattooId);

        return res.json(200).json();
    } catch (e) {
        throw e;
    }
};

module.exports = { deleteTattoo };