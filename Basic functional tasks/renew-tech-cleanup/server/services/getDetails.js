const mongoose = require('mongoose');
const Solution = require('./models/Solution');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/renewtech_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getDetails(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    let solutionId = req.params.solutionId;

    try {
        const solution = await Solution.findById(solutionId);
        return solution;
    } catch (e) {
        throw e;
    }
}

module.exports = { getDetails };