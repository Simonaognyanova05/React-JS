const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const dbUrl = 'mongodb+srv://hotel_db:123hotel@cluster0.xqz9vjy.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function login(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json();
        }
        const compare = await bcrypt.compare(password, user.hashedPass);

        if (!compare) {
            return res.status(401).json();
        }

        return res.status(200).json({ _id: user._id, email: email });
    } catch (e) {
        throw e;
    }
}

module.exports = { login };