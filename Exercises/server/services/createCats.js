const mongoose = require('mongoose');
const Cat = require('./models/Cat');

const url = 'mongodb://localhost:27017/cats';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

module.exports = async function (req, res) {
    await mongoose.connect(url, connectionParams);

    try {
        const { name, age, bread, img, ownerId } = req.body;
        const cat = new Cat({ name, age, bread, img, ownerId });
        await cat.save();
    } catch (e) {
        throw e;
    }
}
