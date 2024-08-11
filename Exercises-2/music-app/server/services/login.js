const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function login(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        const comparedPass = await bcrypt.compare(password, user.hashedPass);
        if (!user || !comparedPass) {
            return res.status(401).json({ message: 'Incorrect data!' });
        };

        console.log('success');
        return res.status(200).json({ _id: user._id, email: user.email });
    } catch (e) {
        throw e;
    }
};

module.exports = { login };