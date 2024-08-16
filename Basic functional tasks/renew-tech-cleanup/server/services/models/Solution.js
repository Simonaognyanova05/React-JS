const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
    type: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    learnMore: { type: String, required: true },
    ownerId: { type: String, required: true },
});

const Solution = mongoose.model('Solution', solutionSchema);

module.exports = Solution;