const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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

async function getCats() {
    try {
        await mongoose.connect(url, connectionParams);
        const cats = await Cat.find({});
        return cats;
    } catch (e) {
        console.log(e);
        throw e; 
    }
}

const app = express();
app.use(cors());

app.get('/cats', async (req, res) => {
    try {
        const cats = await getCats();
        res.json(cats);
    } catch (e) {
        res.status(500).json({ message: 'An error occurred while fetching cats' });
    }
});

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
