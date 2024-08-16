const mongoose = require('mongoose');
const Solution = require('./models/Solution');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/renewtech_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getSolutions(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const solution = await Solution.find({});

        return solution;
    } catch (e) {
        throw e;
    }
};

module.exports = { getSolutions };