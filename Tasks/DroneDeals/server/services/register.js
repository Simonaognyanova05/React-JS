const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const dbUrl = 'mongodb+srv://hotel_db:123hotel@cluster0.xqz9vjy.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function register(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    let { email, password } = req.body;

    let hashedPass = await bcrypt.hash(password, 10);

    try {
        const user = new User({
            email, hashedPass
        });

        await user.save();
        return res.status(200).json();
    } catch {
        res.send("Error");
    }
}

module.exports = { register };