const mongoose = require('mongoose');
const Cat = require('./models/Cat');

const url = 'mongodb://localhost:27017/cats';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};



module.exports = async function getCats() {
    try {
        await mongoose.connect(url, connectionParams);
        const cats = await Cat.find({});
        return cats;
    } catch (e) {
        console.log(e);
        throw e;
    }
}