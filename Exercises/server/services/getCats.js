const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/cats';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

const catSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    breed: { type: String },
    img: { type: String },
    ownerId: { type: String },
});

const Cat = mongoose.model('Cat', catSchema);

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