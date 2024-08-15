const mongoose = require('mongoose');
const Solution = require('./models/Solution');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/renewtech_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function createSolution(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { type, imageUrl, description, learnMore } = req.body;

    try {
        const solution = new Solution({
            type, imageUrl, description, learnMore
        });

        await solution.save();
        return res.status(200).json();
    } catch (e) {
        throw e;
    }
};

module.exports = { createSolution };
