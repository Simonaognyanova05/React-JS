const mongoose = require('mongoose');
const Solution = require('./models/Solution');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/renewtech_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function editSolution(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const solutionId = req.params.solutionId;
    const { type, imageUrl, description, learnMore, ownerId } = req.body;

    try {
        await Solution.findByIdAndUpdate({ _id: solutionId }, { $set: { type, imageUrl, description, learnMore, ownerId } });

        return res.status(200).json();
    } catch (e) {
        throw e;
    }
};

module.exports = { editSolution };