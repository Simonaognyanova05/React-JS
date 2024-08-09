const mongoose = require('mongoose');
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

        if (user && user.password == password) {
            console.log('success');
            res.redirect('/');
        } else {
            throw 'Incorrect data!';
        }

    } catch (e) {
        throw e;
    }
}

module.exports = { login };