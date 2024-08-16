const mongoose = require('mongoose');
const Solution = require('./models/Solution');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/renewtech_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function deleteSolution(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const solutionId = req.params.solutionId;

    try {
        await Solution.findByIdAndDelete(solutionId);

        return res.status(200).json();
    } catch (e) {
        throw e;
    }
};

module.exports = { deleteSolution };