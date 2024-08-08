const mongoose = require('mongoose');
const User = require('./models/User');

const dbUrl = 'mongodb+srv://simonaognanova05:NNN9BLA68lHrjlMM@react-task.hujfarb.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function register(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { email, password, rePassword } = req.body;

    try {
        const user = new User({
            email, password
        });

        await user.save();
        res.redirect('/');
    } catch (e) {
        throw e;
    }
}

module.exports = { register };