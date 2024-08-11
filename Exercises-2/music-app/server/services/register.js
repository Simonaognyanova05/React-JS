const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function register(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { email, password } = req.body;

    try {

        const existedUser = await User.findOne({ email });

        if (existedUser) {
            return res.status(409).json({ message: 'User already exists' });
        };

        const hashedPass = await bcrypt.hash(password, 10);

        const user = new User({
            email, hashedPass
        });

        await user.save();
        return res.status(200).json({ _id: user._id, email: user.email });
    } catch (e) {
        throw e;
    }
};

module.exports = { register };